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

app.get("/history", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'history.html'));
});

app.get("/your-clan", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'your-clan.html'));
});

app.get("/leaderboards", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'leaderboards.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});