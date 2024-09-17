import { Router } from 'express';
const router = Router();
const numbers = [1, 2, 3, 4, 5];

router.get('/', (req, res) => {
  res.json({ 
 message: 'Welcome to the API!',
 numbers: numbers
});
});

export default router;
