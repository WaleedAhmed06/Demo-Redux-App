import { configureStore } from "@reduxjs/toolkit"; 
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"; 
import { combineReducers } from "@reduxjs/toolkit";
import userslice from "./reduces/userslice";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({ 
        user: userslice,
});
const persistedReducer = persistReducer (persistConfig, reducer);
export const store = configureStore({
reducer: persistedReducer, 
});

