// Okay In this file (until I learn otherwise) I'm going to be dropping all of my JS code to make this thing run.

//  To start I'll be taking the script from login in class that creates a hashed password, we'll work on storing it later. Objective 6 (30 pts)
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

//upon adding API change to apiRouter
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

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
});
//  Static middle ware syntax is as follows:
//  app.use(express.static('name of directory to be used aka root.'))  Objective 2 (10 pts)

async function create_user(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    name: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function find_user(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}