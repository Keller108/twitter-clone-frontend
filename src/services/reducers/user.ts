import { createReducer } from "@reduxjs/toolkit";
import { createUser } from "../actions/user";

type InitialUserState = {
    user: {
        userName: string;
        email: string;
        password: string;
        avatar: string;
    }
};

const initialUserState: InitialUserState = {
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
            state.user = action.payload;
        })
});