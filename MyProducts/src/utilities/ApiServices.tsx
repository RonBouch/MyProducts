import axios from "axios";
import { setProducts } from "../redux/rootReducer";
import { store } from '../redux/store'

export const getProducts = async (dispatch: any) => {
    const state = store.getState()?.rootReducer;
    const currentProductsLength = state.products.length;
    const res = await axios.get(`http://localhost:5000/getProducts/${currentProductsLength}`)
    if (res.status === 200) {
        dispatch(setProducts((res.data)));
    }
}

// export const getURL = async (shortUrl: string | undefined) => {
//     const res = await axios.get(`http://localhost:5000/getURL/${shortUrl}`)
//     if (res.status === 200) {
//         return res.data;
//     }
// }

// export const onDelete = async (url: string, dispatch: any) => {
//         const res = await axios.delete(`http://localhost:5000/deleteURL/${url}`);
//         if (res.status === 200) {
//             getProducts(dispatch);
//         }
// }

// export const addUrl = async (params: object) => {
//     try {
//         const res = await axios.post("http://localhost:5000/addURL", params);
//         if (res.status === 200 && res.data.errCode !== -1) {
//             toast.success(res.data.msg);
//             return true;
//         } else {
//             toast.info("URL already exists");
//         }
//     } catch (error) {
//         toast.error("An Error occurred, Please tyr again later.");
//     }
// }

// export const setCount = async (url: string | undefined) => {
//     try {
//         const res = await axios.post('http://localhost:5000/setCount', { url });
//         if (res.status === 200 && res.data.errCode !== -1) {
//             return true;
//         }
//     } catch (error) {
//         console.log("🚀 ~ file: ApiServices.tsx ~ line 54 ~ setCount ~ error", error)
//     }
// }