import { createReducer } from "@reduxjs/toolkit";
import { IPost } from "../../entites/Post/types";
import { postMessage } from "../actions/post";

type StoreType = {
    posts: IPost[] | [];
};

const initialPostsState: StoreType = {
    posts: [],
};

export const postReducer = createReducer(initialPostsState, builder => {
    builder
        .addCase(postMessage, (state, action) => {
            let postList = [...state.posts];
            postList.push(action.payload)

            state.posts = postList;
        })
});