import { createAction } from "@reduxjs/toolkit";
import { CREATE_USER } from "../constants/user";

export const createUser = createAction<any, "CREATE_USER">(CREATE_USER);

export type UserActions = ReturnType<typeof createUser>;