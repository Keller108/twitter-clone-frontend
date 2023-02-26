import { combineReducers } from "@reduxjs/toolkit";
import { loaderReducer } from "./loader";
import { modalReducer } from "./modal";
import { postReducer } from "./post";

export const rootReducer = combineReducers({
    loaderStore: loaderReducer,
    modalStore: modalReducer,
    postStore: postReducer
});