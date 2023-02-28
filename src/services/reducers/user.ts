import { createReducer } from "@reduxjs/toolkit";
import { createUser } from "../actions/user";

type InitialUserState = {
    user: {
        email: string;
        password: string;
        avatar: string;
        userName: string;
    }
};

const initialUserState: InitialUserState = {
    user: {
        email: '',
        password: '',
        avatar: '',
        userName: ''
    }
};

export const userReducer = createReducer(initialUserState, builder => {
    builder
        .addCase(createUser, (state, action) => {
            state.user = action.payload;
        })
});