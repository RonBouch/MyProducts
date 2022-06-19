import express from 'express';
import {getProducts} from '../controllers/ProductsApi.js'

const router = express.Router();
//Get
router.get("/getProducts/:len", getProducts);
router.get("/getProducts/:len/:filterBy", getProducts);

export default router;