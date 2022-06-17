

let products = [
    {
        "productName": "Apple AirPods Pro",
        "price": "224$",
        "about": "AirPods Pro feature Active Noise Cancellation for immersive sound. Transparency mode for hearing the world around‏",
        "img": "https://mypc2020.co.il/Cat_488389_3163.jpeg"
    },
    {
        "productName": "iPhone",
        "price": "4$",
        "about": "Get iPhone 13 Pro or iPhone 13 Pro Max for an amazing price with special carrier trade-in offers. Make low monthly payments at 0% APR. Free shipping.‏",
        "img": "https://chinaphone.co.il/wp-content/uploads/2022/01/13maxGold.png"
    },
    {
        "productName": "iPhone",
        "price": "4$",
        "about": "Get iPhone 13 Pro or iPhone 13 Pro Max for an amazing price with special carrier trade-in offers. Make low monthly payments at 0% APR. Free shipping.‏",
        "img": "https://chinaphone.co.il/wp-content/uploads/2022/01/13maxGold.png"
    },
    {
        "productName": "iPhone",
        "price": "4$",
        "about": "Get iPhone 13 Pro or iPhone 13 Pro Max for an amazing price with special carrier trade-in offers. Make low monthly payments at 0% APR. Free shipping.‏",
        "img": "https://chinaphone.co.il/wp-content/uploads/2022/01/13maxGold.png"
    },
    {
        "productName": "iPhone",
        "price": "4$",
        "about": "Get iPhone 13 Pro or iPhone 13 Pro Max for an amazing price with special carrier trade-in offers. Make low monthly payments at 0% APR. Free shipping.‏",
        "img": "https://chinaphone.co.il/wp-content/uploads/2022/01/13maxGold.png"
    }
]

//DELETE
export const deleteProduct = (req, res) => {
    products = products.slice().filter((product) => product.productName !== req.params.product);
    res.send("Product Deleted!");
}


//GET 
export const getProducts = (req, res) => {
    res.send(products)
}

export const getProduct = (req, res) => {
    const getProduct = products.filter((product) => product.productName === req.params.product);
    res.send(getProduct[0]);
}

//POST
export const addProduct = (req, res) => {
    console.log("🚀 ~ file: ProductsApi.js ~ line 23 ~ addProduct ~ req", req)
    const ProductDetails = req.body;
    console.log("🚀 ~ file: ProductsApi.js ~ line 23 ~ addProduct ~ ProductDetails", ProductDetails)
    if (ProductDetails) {
        if (products.filter(product => product.productName === ProductDetails.productName).length > 0) {
            res.send({msg: 'Product already exists', errCode: -1});
        } else {
            products.push(ProductDetails);
            res.send({msg: "Product Added successfully"});
        }
    } else {
        res.send("Product Added successfully");
    }
}

export const setCount = (req, res) => {
    const product = req.body.product;
    let getCounter = products.find(u => u.productName === product)
    if (getCounter) {
        getCounter.count = getCounter.count + 1
        res.send(`${product} - count: ${getCounter.count}`);
    } else {
        res.send("Err..");
    }


}