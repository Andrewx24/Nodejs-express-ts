import express from 'express';
import cors from 'cors';
import axios from 'axios';


const app = express();
const port = 5001;

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})
// Import the route using ES module syntax (use `.js` if TypeScript outputs to JavaScript)
import router from './routes/api'; // Assuming api.ts exists and compiles to api.js

// Middleware to use the '/api' route
app.use('/api', router);

// Basic route for the homepage
app.get('/', (req, res) => {
  
  res.send('Hello, welcome to the homepage of Node and Express.js with TypeScript and nodemon');
});


app.get('/fetch-users', async (req, res) => {
  try {
    const response = await axios.get('https://nextjs-freestyle.vercel.app/api/users');
    res.json(response.data); // Send the data to the client
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Route for "/task"
app.get('/task', (req, res) => {
  res.json({
    numner: 1,
    message: 'This is the task route',
  });
});

// Route for "/new"
app.get('/new', (req, res) => {
  res.send('Hello, welcome to the new page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
