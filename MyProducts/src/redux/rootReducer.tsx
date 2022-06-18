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
      state.products = [...state.products, ...action.payload.products];
      if (!state.productsLength)
        state.productsLength = action.payload.productsLength;
      state.loader = false;
    },
    resetState: () => initialState,

    setLoader: (state: any, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, setLoader, resetState } = productsSlice.actions

export default productsSlice.reducer
