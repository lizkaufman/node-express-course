const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //included w/ Express node modules; just have to require it to use it

const PORT = 8000;

const mockUserData = [{ name: 'Mark' }, { name: 'Jill' }];

app.use(bodyParser.json()); //parses the body of a request (i.e. POST)

app.get('/users', function (req, res) {
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData,
  });
});

app.get('/users/:id', function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: 'got one user',
    user: req.params.id,
  });
});

app.post('/login', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = 'billyTheKid';
  const mockPassword = 'superSecret';

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: 'password and username match!',
      token: 'encrypted token goes here',
    });
  } else {
    res.json({
      success: false,
      message: 'password and username do not match',
    });
  }
});

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
});
