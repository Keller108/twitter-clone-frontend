import { createAction } from "@reduxjs/toolkit";

export const logIn = createAction("LOGIN_SUCCESS");
export const logOut = createAction("LOGOUT_SUCCESS");

export type AuthActions =
    | ReturnType<typeof logIn>
    | ReturnType<typeof logOut>;