const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Node.js server is running!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});