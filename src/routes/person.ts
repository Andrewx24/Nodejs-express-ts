import { Router } from 'express';

const PersonRoute = Router();

// Define just the base route for "/"
PersonRoute.get("/", (req, res) => {
  res.json({
    message: "This is the person route",
  });
});

export default PersonRoute;
