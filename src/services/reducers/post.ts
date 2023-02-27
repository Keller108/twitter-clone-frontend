import { createReducer } from "@reduxjs/toolkit";
import { IPost } from "../../entites/Post/types";
import { postMessage } from "../actions/post";

type StoreType = {
    list: IPost[] | [];
};

const initialPostsState: StoreType = {
    list: [],
};

export const postReducer = createReducer(initialPostsState, builder => {
    builder
        .addCase(postMessage, (state, action) => {
            let postList = [...state.list];
            postList.push(action.payload)

            state.list = postList;
        })
});