// server.js
const express = require('express');
const app = express();

// Define a GET route
app.get('/', (req, res) => {
  res.send('Hello, World! ... from Express.js Docker');
});

// Define another GET route
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Define a POST route
app.post('/submit', (req, res) => {
  res.send('Form Submitted');
});

// Start the server
const port = process.env.PORT || 5010;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
