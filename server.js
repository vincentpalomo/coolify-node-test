const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http:0.0.0.0:${port}`);
});
