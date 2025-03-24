const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');

const app = express();
const authCookieName ='token';
const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.json());
app.use(express.static('public'))
const users = [];

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  passwords[req.body.user] = hashedPassword;
  res.send({ user: req.body.user });
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await find_user('username', req.body.username);
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
  const user = await find_user('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

apiRouter.get('/test', (req, res) => {
  res.status(200);
  res.send("Hello there");
}
)

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

async function find_user(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}