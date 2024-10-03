import express from 'express';
import cors from 'cors';
import axios from 'axios';
import ani from './routes/hello';  // Ensure this file exports `ani` properly
import Google from './request';  // Ensure this file exports `Google` properly
import PersonRoute from './routes/person';  // Ensure this file exports router
import router from './routes/api';  // Assuming api.ts exists and compiles to api.js
import path from 'path';

const app = express();
const port = 5001;

// Middleware
app.use(cors());  // Use CORS for handling cross-origin requests

// Route middlewares
app.use('/person', PersonRoute);  // Mounting the /person route
app.use('/api', router);  // Mounting the /api route

// Basic route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.post('/', (req, res) => {
  res.send(PersonRoute);
});

// Example Google route
app.get('/google', (req, res) => {
  res.send(Google);
});

// Async route for fetching users from external API
app.get('/fetch-users', async (req, res) => {
  try {
    const response = await axios.get('https://nextjs-freestyle.vercel.app/api/users');
    res.json(response.data);  // Send the data to the client
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Route for /task
app.get('/task', (req, res) => {
  res.json({
    number: 1,  // Typo corrected: "numner" -> "number"
    message: 'This is the task route',
  });
});

// Route for /new
app.get('/new', (req, res) => {
  res.send('Hello, welcome to the new page');
});

// Route for /hello
app.get('/hello', (req, res) => {
  res.send(ani);
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

