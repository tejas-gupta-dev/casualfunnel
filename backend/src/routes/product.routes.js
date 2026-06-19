import express from 'express';
import { getproducts } from '../controllers/product.js';

const routerr = express.Router();
routerr.get('/', getproducts);

export default routerr;
