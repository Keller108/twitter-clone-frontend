import { combineReducers } from "@reduxjs/toolkit";
import { loaderReducer } from "./loader";
import { modalReducer } from "./modal";

export const rootReducer = combineReducers({
    loaderStore: loaderReducer,
    modalStore: modalReducer
});