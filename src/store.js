import { configureStore } from '@reduxjs/toolkit'
import userReducer from './redux/reducers/user'

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})