const express = require('express');
const app = express();
// The cloud environment will assign a dynamic port, or default to 3000
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, Katlego! Your API is running directly from GitHub.' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
