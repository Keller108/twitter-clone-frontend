import { createReducer } from "@reduxjs/toolkit";
import { IUserModel } from "../../entites/User";
import { createUser, setCurrentUser } from "../actions/user";

type InitialUserState = {
    registerSuccess: boolean;
    userCreateSuccess: boolean;
    user: IUserModel,
    users: IUserModel[];
};

const initialUserState: InitialUserState = {
    registerSuccess: false,
    userCreateSuccess: false,
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
            state.registerSuccess = true;
            state.users.push(action.payload);
        })
        .addCase(setCurrentUser, (state, action) => {
            state.user = action.payload;
            state.userCreateSuccess = true;
        })
});