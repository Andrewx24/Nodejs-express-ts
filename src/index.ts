import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import axios from 'axios';
import helloRoute from './routes/hello';
import fetchGoogleMetadata from './request';
import PersonRoute from './routes/person';
import router from './routes/api';
import path from 'path';

// Define type for request body
type RequestBody = {
  // Define the structure of your request body
  [key: string]: unknown;
};

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Route middlewares
app.use('/person', PersonRoute);
app.use('/api', router);

// Basic route for the homepage
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.post('/', (req: Request, res: Response) => {
  const typedBody = req.body as RequestBody;
  res.json({ message: helloRoute, ...typedBody });
});

// Updated Google route for metadata
app.get('/google', async (req: Request, res: Response) => {
  try {
    const googleMetadata = await fetchGoogleMetadata();
    res.json(googleMetadata);
  } catch (error) {
    console.error('Error fetching Google metadata:', error);
    res.status(500).json({ error: 'Failed to fetch Google metadata' });
  }
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});