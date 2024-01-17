import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import userFormReducer from "./Slices/UserFormSlice";

// Store
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [],
};

// Slice
const reducer = combineReducers({
  UserForm: userFormReducer,
});

// Action
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
