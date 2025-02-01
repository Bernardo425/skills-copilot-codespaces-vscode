// create a webserver with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// we need to parse the body of the request
app.use(bodyParser.json());

// store the comments in memory
const comments = [];

// create a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// read all the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});