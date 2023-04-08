import { createReducer } from "@reduxjs/toolkit";
import { IUserModel } from "../../entites/User";
import { createUser } from "../actions/user";

type InitialUserState = {
    success: boolean;
    user: IUserModel,
    users: IUserModel[];
};

const initialUserState: InitialUserState = {
    success: false,
    user: {
        userName: '',
        email: '',
        password: '',
        avatar: ''
    },
    users: []
};

export const userReducer = createReducer(initialUserState, builder => {
    builder
        .addCase(createUser, (state, action) => {
            state.success = true;
            state.user = action.payload;
            state.users.push(action.payload);
        })
});