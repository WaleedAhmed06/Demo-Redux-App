import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [], 
  reducers: {
    addUser: (state, action) => {
      state.push(...action.payload); 
    },
    postUser: (state, action) => {
      state.push(action.payload);
    },
    delUser: (state, action) => {
      state.splice(action.payload, 1);
    },
    editUser: (state, action) => {
      const { index, updatedUser } = action.payload;
      state[index] = updatedUser;
    },
  },
});

export const { addUser, postUser, delUser, editUser } = userSlice.actions;
export default userSlice.reducer;
