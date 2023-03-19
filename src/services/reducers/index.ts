import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { loaderReducer } from "./loader";
import { modalReducer } from "./modal";
import { postReducer } from "./post";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    loaderStore: loaderReducer,
    modalStore: modalReducer,
    postStore: postReducer,
    userStore: userReducer,
    authStore: authReducer
});