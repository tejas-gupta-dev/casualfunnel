import express from 'express';
import router from './routes/user.routes.js';
import routerr from './routes/product.routes.js';
import routee from './routes/events.routes.js'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://casualfunnel-h4oz6dyii-tejas-projects-b42345d4.vercel.app/",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', router);
app.use('/api/products', routerr);
app.use('/api/events', routee);

export default app;
