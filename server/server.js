import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import productsRoutes from './src/routes/ProductsApi.js'

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());


app.use('/', productsRoutes);
app.get("*", (req, res) => res.send("That route doesn't exist"));

app.listen(port, () =>
    console.log(`Server is listening on port: http://localhost:${port}`)
);