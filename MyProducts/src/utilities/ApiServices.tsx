import axios from "axios";
import { setProducts } from "../redux/rootReducer";
import { store } from '../redux/store'

export const getProducts = async (dispatch: any, filterBy?: string) => {
    const state = store.getState()?.rootReducer;
    const currentProductsLength = state.products.length;
    const productsLength = state.productsLength;
    const res = await axios.get(`http://localhost:5000/getProducts/${productsLength == 0 ? 0 : currentProductsLength}${filterBy ? `/${filterBy}` : ''}`)
    if (res.status === 200) {
        dispatch(setProducts((res.data)));
    }
}
