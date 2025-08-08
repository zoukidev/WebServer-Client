import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    users: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = null
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
  }
})

export const { setUser, clearUser, setUsers } = userSlice.actions
export default userSlice.reducer