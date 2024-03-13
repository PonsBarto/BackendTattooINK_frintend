import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
import { userDetailSlice } from "../Pages/userDetailSilce";
import { userSlice } from "../Pages/userSilce";



const reducers = combineReducers({
  user: userSlice,
  userDetails: userDetailSlice
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});