import { createReducer } from "@reduxjs/toolkit";
import { loaderOff, loaderOn } from "../actions/loader";

type InitialStateType = {
    isLoading: boolean;
};

const initialLoaderState: InitialStateType = {
    isLoading: false
};

export const loaderReducer = createReducer(initialLoaderState, builder => {
    builder
        .addCase(loaderOn, state => {
            state.isLoading = true;
        })
        .addCase(loaderOff, state => {
            state.isLoading = false;
        });
});