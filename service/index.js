const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const DB=require('./database.js')
const {peer_proxy} = require('./socket.js')

const app = express();
app.use(cookieParser());
const authCookieName ='token';
const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.json());
app.use(express.static('public'))
const event_list = [];

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//This is the register function.
apiRouter.post('/auth/register', async (req, res) => {
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await create_user(req.body.user, req.body.password);
    setAuthCookie(res, user.token);
    console.log(user.token)
  }
});

//Find the places where this function is failing.  It's in the find function working through the cookies

//This is the log in function.
apiRouter.post('/auth/login', async (req, res) => {
  console.log(req.body.user)
  const user = await find_user('username', req.body.user);
  console.log(user)
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.id);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await find_user('username', req.body.username);
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
  console.log(req.body);
  // const user = await find_user(req.body.username);
  const user=3;
  console.log(user)
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: "You aren't authorized to access this.  How'd you get here in the first place?" });
  }
};  


apiRouter.post('/calendar_post', async (req, res)=>{
  const {added_ev}=req.body;
  if (!added_ev){
    return res.status(400).send("Something went wrong")
  }

  event_list.push(added_ev)
  res.status(200).send("It worked")  
});

//Line 76
apiRouter.get('/calendar_post', async (req, res)=>{
  res.send(event_list)
});
//Reference index.js of simon.  Update with calendar stuff not scores.

apiRouter.get('/editor', verifyAuth, (_req, res) =>{
  res.send("Welcome instructor.")
})

const httpServer=app.listen(port, () => {
  console.log(`Listening to port ${port}`)
});

async function find_user(field, value) {
  console.log("Before if check")
  if (!value) return null;
  console.log(value)
  if (field === 'id') {
    return DB.getUserByToken(value);
  }
  console.log("Got to line 90")
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
    sameSite: 'none',
  });
}

peer_proxy(httpServer);