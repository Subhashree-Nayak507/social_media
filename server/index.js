import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes.js';
import { connectDB } from './db/connectDb.js';
import UserRouter from './routes/user.routes.js';

dotenv.config();
const app = express();

app.use(express.json());
 app.use(express.urlencoded({ extended:true}));
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/user',UserRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    connectDB();
    console.log(`Server running at http://localhost:${port}`);
});
