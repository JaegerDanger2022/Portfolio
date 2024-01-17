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
    foodData: [],
  },

  reducers: {
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setAge: (state, action) => {
      state.Age = action.payload;
    },
    setFoodData: (state, action) => {
      state.foodData = action.payload;
    },
  },
});

export const selectUserName = (state) => state.UserFormSlice.Name;
export const selectUserAge = (state) => state.UserFormSlice.Age;
export const selectUserfoodData = (state) => state.UserFormSlice.foodData;

export const { setName, setAge, setFoodData } = UserFormSlice.actions;

export default UserFormSlice.reducer;
