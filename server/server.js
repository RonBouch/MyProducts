import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import productsRoutes from './src/routes/ProductsApi.js'
// import getUrlsFromDB from './src/firebase/FBInit.js'

// import {initializeApp} from 'firebase/app';
// import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';

// const firebaseConfig = {
//     apiKey: "AIzaSyAiPqjTBI7gdDkKA300sMpMo0GDOT-l_to",
//     authDomain: "ronurlshortener.firebaseapp.com",
//     databaseURL: "https://ronurlshortener-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "ronurlshortener",
//     storageBucket: "ronurlshortener.appspot.com",
//     messagingSenderId: "446153392995",
//     appId: "1:446153392995:web:7dafecc7bac1ca196ac956",
//     measurementId: "G-HQKFLG49QP"
// };

// const initFB = initializeApp(firebaseConfig);
// const db = getFirestore(initFB);
// getUrlsFromDB(db)

// async function getUrlsFromDB(db) {
//     console.log("🚀 ~ file: index.js ~ line 25 ~ getUrlsFromDB ~ db", db)
//     const urlsCol = collection(db, 'urls');
//     console.log("🚀 ~ file: index.js ~ line 26 ~ getUrlsFromDB ~ urlsCol", urlsCol)
//     const urlSnapshot = await getDocs(urlsCol);
//     const urlList = urlSnapshot.docs.map(doc => doc.data());
//     console.log("🚀 ~ file: index.js ~ line 28 ~ getUrlsFromDB ~ urlList", urlList)
//     return urlList;
// }

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());


app.use('/', productsRoutes);
app.get("*", (req, res) => res.send("That route doesn't exist"));

app.listen(port, () =>
    console.log(`Server is listening on port: http://localhost:${port}`)
);