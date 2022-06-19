import {readFile} from 'fs/promises';
let products = JSON.parse(await readFile("/Users/isracardteam/Documents/Ron/MyProducts/server/src/data.json"));

const itemsPerReq = 6

//GET 
export const getProducts = (req, res) => {
    const filterBy = req.params.filterBy
    let dataAfterFilter = [];
    dataAfterFilter = filterBy ? products.filter(product => product.productName.toUpperCase().includes(filterBy.toUpperCase())) : products;
    const getNewProducts = dataAfterFilter.slice(+req.params.len,
        dataAfterFilter.length < (+req.params.len + itemsPerReq)
            ? dataAfterFilter.length
            : (+req.params.len + itemsPerReq));
    res.send({
        products: getNewProducts,
        productsLength: dataAfterFilter.length,
    }
    )
}