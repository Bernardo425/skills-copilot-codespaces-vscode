// create a webserver with express and listen on port 3000
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// create a new comment
app.post('/comment', (req, res) => {
  const comment = req.body;
  console.log('Adding new comment: ', comment);
  res.json(comment);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});