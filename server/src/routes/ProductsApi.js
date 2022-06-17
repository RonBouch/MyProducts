import express from 'express';
import {getProducts, addProduct, deleteProduct, getProduct, setCount} from '../controllers/ProductsApi.js'

const router = express.Router();
//Get
router.get("/getProducts", getProducts);
router.get("/getProduct/:productID", getProduct);

//POST
router.post("/addProduct", addProduct);
router.post("/setCount", setCount);

//DELETE
router.delete("/deleteProduct/:productID", deleteProduct);


export default router;