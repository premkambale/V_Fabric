// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Store/AppSlice";// Ensure the path is correct

const store = configureStore({
    reducer: {
        user: userSlice
    }
});

export default store;
