import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { loaderOff, loaderOn } from "../actions/loader";

type TInitialLoaderState = {
    isLoading: boolean;
};

const initialLoaderState: TInitialLoaderState = {
    isLoading: false
};

export const loaderReducer = createReducer(initialLoaderState, builder => {
    builder
        .addCase(loaderOn, state => {
            state.isLoading = true;
        })
        .addCase(loaderOff, state => {
            state.isLoading = false;
        })
});

export const rootReducer = combineReducers({
    loaderStore: loaderReducer
});