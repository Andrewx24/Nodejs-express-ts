import express from 'express';

const app = express();
const port = 3000;


// Import the route using ES module syntax (use `.js` if TypeScript outputs to JavaScript)
import router from './routes/api'; // Assuming api.ts exists and compiles to api.js

// Middleware to use the '/api' route
app.use('/api', router);

// Basic route for the homepage
app.get('/', (req, res) => {
 res.send('Hello, welcome to the homepage Node and Express.js with TypeScript');
});

// Route for "/task"
app.get('/task', (req, res) => {
  res.json({
    router
  })

});

// Route for "/new"
app.get('/new', (req, res) => {
  res.send('Hello, welcome to the new page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
