import { createSlice } from '@reduxjs/toolkit'

const adminEmail = 'admin@gmail.com'
const adminPassword = 'admin123'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },

  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload

      if (email === adminEmail && password === adminPassword) {
        state.isAuthenticated = true
        state.user = { email }
      }
    },

    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer