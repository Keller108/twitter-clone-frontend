import { createReducer } from "@reduxjs/toolkit";
import { logIn, logOut } from "../actions/app";

type InitialStateType = {
    isLogined: boolean;
};

const initialAppState: InitialStateType = {
    isLogined: false,
};

export const authReducer = createReducer(initialAppState, builder => {
    builder
        .addCase(logIn, state => {
            state.isLogined = true;
        })
        .addCase(logOut, state => {
            state.isLogined = false;
        });
});