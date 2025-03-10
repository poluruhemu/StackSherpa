// server/src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

// load environment variables
dotenv.config();

//  initialize express app
const app = express();
const PORT = process.env.PORT ?? 5000;

// security and untility middleware
app.use(helmet()); // Sets Various http headers for security
app.use(morgan('dev')); // HTTP request logger
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('StackSherpa API is running');
});

// Database connection
// Database connection
mongoose
  .connect(process.env.MONGODB_URI ?? 'mongodb://localhost:27017/stacksherpa')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server after successful database connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });