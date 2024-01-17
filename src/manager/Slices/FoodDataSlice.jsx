import { createSlice } from "@reduxjs/toolkit";

export const FoodDataSlice = createSlice({
  name: "FoodData",
  initialState: {
    foodDataArray: [],
  },

  reducers: {
    setFoodData: (state, action) => {
      state.foodDataArray = action.payload;
    },
  },
});

export const selectFoodData = (state) => state.FoodData.foodDataArray;

export const { setFoodData } = FoodDataSlice.actions;

export default FoodDataSlice.reducer;
