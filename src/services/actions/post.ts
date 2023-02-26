import { createAction } from "@reduxjs/toolkit";
import { IPost } from "../../entites/Post/types";
import { POST_MESSAGE } from "../constants/post";

export const postMessage = createAction<IPost, "POST_MESSAGE">(POST_MESSAGE);

export type PostActions = ReturnType<typeof postMessage>;