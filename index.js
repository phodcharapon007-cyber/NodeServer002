const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const url = require('url');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'wedPage', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'wedPage', 'about.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});