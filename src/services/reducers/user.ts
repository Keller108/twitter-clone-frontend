import { createReducer } from "@reduxjs/toolkit";
import { createUser } from "../actions/user";

type InitialUserState = {
    success: boolean;
    user: {
        userName: string;
        email: string;
        password: string;
        avatar: string;
    }
};

const initialUserState: InitialUserState = {
    success: false,
    user: {
        userName: '',
        email: '',
        password: '',
        avatar: ''
    }
};

export const userReducer = createReducer(initialUserState, builder => {
    builder
        .addCase(createUser, (state, action) => {
            state.success = true;
            state.user = action.payload;
        })
});