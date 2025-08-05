import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './db/db.js';
import authRoutes from './routes/authRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import logoutRoutes from './routes/authRoutes.js'

dotenv.config();
const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

// DB Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/users',logoutRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
