import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {
  products: any[],
  productsLength: number,
  loader: boolean,
}

const initialState: ProductState = {
  products: [],
  productsLength: 0,
  loader: false,
}

export const productsSlice = createSlice({
  name: 'rootReducer',
  initialState,
  reducers: {
    setProducts: (state: any, action: PayloadAction<any | null>) => {
      if (state.productsLength) {
        state.products = [...state.products, ...action.payload.products];
      } else {
        state.products = action.payload.products;
      }
      if (!state.productsLength || state.productsLength !== action.payload.productsLength)
        state.productsLength = action.payload.productsLength;
      state.loader = false;
    },
    resetState: () => initialState,

    clearProductsLength: (state: any) => {
      state.productsLength = 0
    },
    setLoader: (state: any, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, setLoader, resetState, clearProductsLength } = productsSlice.actions

export default productsSlice.reducer
