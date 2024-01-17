import { createSlice } from "@reduxjs/toolkit";

export const UserFormSlice = createSlice({
  name: "UserForm",
  initialState: {
    Name: "",
    Age: "",
    userCreditCard: {
      CardNumber: "",
      ExpirationDate: "",
    },
  },

  reducers: {
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setAge: (state, action) => {
      state.Age = action.payload;
    },
  },
});

export const selectUserName = (state) => state.UserForm.Name;
export const selectUserAge = (state) => state.UserForm.Age;

export const { setName, setAge } = UserFormSlice.actions;

export default UserFormSlice.reducer;
