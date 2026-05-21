import { createSlice } from '@reduxjs/toolkit'
import products from "../../data/temp.js";

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products,
  },
  reducers: {},
})

export default productSlice.reducer