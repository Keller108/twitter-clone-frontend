import { createAction } from "@reduxjs/toolkit";
import { CREATE_USER, SET_CURRENT_USER } from "../constants/user";

export const createUser = createAction<any, "CREATE_USER">(CREATE_USER);
export const setCurrentUser = createAction<any, "SET_CURRENT_USER">(SET_CURRENT_USER);

export type UserActions =
    | ReturnType<typeof createUser>
    | ReturnType<typeof setCurrentUser>;