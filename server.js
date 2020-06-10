const express = require('express');
const app = express();

const PORT = 8000;

const mockUserData = [{ name: 'Mark' }, { name: 'Jill' }];

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

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
});
