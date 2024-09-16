import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

// Corrected route definition
app.get('/task', (req, res) => {
  res.send("New tasks");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
