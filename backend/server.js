import app from './src/app.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './src/config/db.js';

const port = process.env.PORT || 3000;
connectDB();


app.listen(port, () => {
    console.log("server is running on port" + port)
})
