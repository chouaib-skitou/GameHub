import express, { Application } from 'express';
import { swaggerUi, swaggerSpec } from './api-docs';
import connectDB from './config/mongo';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app: Application = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Swagger API Documentation
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// MongoDB Connection
connectDB();

// Routes
app.use('/users', userRoutes); // Mount user routes

// Default route for health check
app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;
