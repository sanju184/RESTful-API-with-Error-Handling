// Question  :

// The following API is supposed to handle requests for getting a list of users from a fake database (an array). However, there is an issue with the error handling if no users are found.

// const express = require('express');
// const app = express();

// const users = [
// { id: 1, name: 'John Doe' },
// { id: 2, name: 'Jane Smith' }
// ];

// app.get('/users', (req, res) => {
// // Simulating an issue where there might be no users
// const user = users.find(u => u.id === parseInt(req.query.id));
// res.json(user); // Issue: No error handling if user is not found
// });

// app.listen(3000, () => console.log('Server running on port 3000'));

// Fix the error handling by returning a 404 response if the user is not found.
// Modify the API to send an error message in the response.

const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

app.get('/users', (req, res) => {
  const userId = parseInt(req.query.id);
  
  // If ID is not provided
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required in query parameters' });
  }

  const user = users.find(u => u.id === userId);

  if (!user) {
    //  User not found - send 404
    return res.status(404).json({ error: `User with ID ${userId} not found` });
  }

  // User found - send data
  res.json(user);
});

app.listen(3000, () => console.log('Server running on port 3000'));
