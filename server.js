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

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
});
