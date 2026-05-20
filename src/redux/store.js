import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'
import productReducer from './slices/productSlice'
import usersReducer from './slices/usersSlice'
import ordersReducer from './slices/ordersSlice'

const store = configureStore({

  reducer: {

    cart: cartReducer,

    auth: authReducer,

    products: productReducer,

    users: usersReducer,

    orders: ordersReducer

  },

})

export default store