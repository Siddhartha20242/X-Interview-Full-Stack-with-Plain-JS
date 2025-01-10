import express from 'express';
import dotenv from 'dotenv'


import connectMongoDb from '../db/connectMongodb.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;




console.log(process.env.MONGO_URI);



app.use('/api/auth', authRoutes)        // This is the middleware. If we visit /api/auth then call authRoutes








app.listen(PORT, () => {
    console.log("Server is running on port 8000")
    connectMongoDb();
});
