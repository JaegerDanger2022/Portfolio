import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
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

export const selectUserName = (state) => state.ProductSlice.Name;
export const selectUserAge = (state) => state.ProductSlice.Age;

export const { setName, setAge } = ProductSlice.actions;

export default ProductSlice.reducer;
