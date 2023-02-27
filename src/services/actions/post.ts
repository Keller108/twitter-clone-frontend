import { createAction } from "@reduxjs/toolkit";
import { POST_MESSAGE } from "../constants/post";

export const postMessage = createAction<any, "POST_MESSAGE">(POST_MESSAGE);

export type PostActions = ReturnType<typeof postMessage>;