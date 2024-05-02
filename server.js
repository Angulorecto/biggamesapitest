const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 0 }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'real.html'));
});

app.get("/apiTest", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'apiTest.html'));
});

app.get("/demo", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'demo.html'));
});

app.get("/items", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'everything.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});