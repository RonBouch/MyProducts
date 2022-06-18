import {readFile} from 'fs/promises';
let products = JSON.parse(await readFile("/Users/isracardteam/Documents/Ron/MyProducts/server/src/data.json"));

const itemsPerReq = 6

//GET 
export const getProducts = (req, res) => {
    const getNewProducts = products.slice(+req.params.len,
        products.length < (+req.params.len + itemsPerReq)
            ? products.length
            : (+req.params.len + itemsPerReq));
    res.send({
        products: getNewProducts,
        productsLength: products.length,
    }
    )
}