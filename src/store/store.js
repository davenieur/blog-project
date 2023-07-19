import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { postSlice } from "./post/postSlice";

export const store = configureStore({
    reducer: {
        posts: postSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})