import { createAction } from "@reduxjs/toolkit";
import { LOADER_OFF, LOADER_ON } from "../constants/loader";

export const loaderOn = createAction(LOADER_ON);
export const loaderOff = createAction(LOADER_OFF);

export type TLoaderActions =
    | ReturnType<typeof loaderOn>
    | ReturnType<typeof loaderOff>;