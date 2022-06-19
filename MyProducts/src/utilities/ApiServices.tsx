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
