import { createReducer } from "@reduxjs/toolkit";
import { modalClose, modalOpen } from "../actions/modal";

type InitialStateType = {
    isModalActive: boolean;
    modalType: string;
};

const initialLoaderState: InitialStateType = {
    isModalActive: false,
    modalType: ''
};

export const modalReducer = createReducer(initialLoaderState, builder => {
    builder
        .addCase(modalOpen, (state, action) => {
            state.isModalActive = true;
            state.modalType = action.payload;
        })
        .addCase(modalClose, state => {
            state.isModalActive = false;
            state.modalType = ''
        });
});