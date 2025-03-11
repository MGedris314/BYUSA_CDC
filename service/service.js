// Okay In this file (until I learn otherwise) I'm going to be dropping all of my JS code to make this thing run.

//  To start I'll be taking the script from login in class that creates a hashed password, we'll work on storing it later. Objective 6 (30 pts)
const bcrypt = require('bcryptjs');
const express = require('express');
const app = express();
const cookieParser=requre('cookie-parser');
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.listen(port, () => {
  console.log("Listening to port ${port}")
});


app.use(express.json());
app.use(express.static('public'))

const passwords = {};

app.post('/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  passwords[req.body.user] = hashedPassword;
  res.send({ user: req.body.user });
});

app.put('/login', async (req, res) => {
  const hashedPassword = passwords[req.body.user];
  if (hashedPassword && (await bcrypt.compare(req.body.password, hashedPassword))) {
    res.send({ user: req.body.user });
  } else {
    res.send(401, { msg: 'invalid user or password' });
  }
});


//  Static middle ware syntax is as follows:
//  app.use(express.static('name of directory to be used aka root.'))  Objective 2 (10 pts)

