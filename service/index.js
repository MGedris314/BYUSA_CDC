const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const DB=require('./database.js')

const app = express();
const authCookieName ='token';
const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.json());
app.use(express.static('public'))
const users = [];

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//This is the register function.
apiRouter.post('/auth/register', async (req, res) => {
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await create_user(req.body.user, req.body.password);

    setAuthCookie(res, user.token);
  }
});

//This is the log in function.
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('username', req.body.user);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});
//This was just a test, probably may want to delete this later.
apiRouter.get('/test', (req, res) => {
  res.status(200);
  res.send("Hello there");
}
)
//This verifies the users
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: "You aren't authorized to access this.  How'd you get here in the first place?" });
  }
};

apiRouter.get('/editor', verifyAuth, (_req, res) =>{
  res.send("Welcome instructor.")
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
});

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.find_user(value);
}

async function create_user(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  console.log(username)
  await DB.add_admin(user); // Add user to database here

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}