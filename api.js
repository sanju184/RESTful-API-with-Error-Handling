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