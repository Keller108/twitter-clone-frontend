import { createAction } from "@reduxjs/toolkit";
import { CLOSE_MODAL, OPEN_MODAL } from "../constants/modal";

export const modalOpen = createAction<string, "OPEN_MODAL">(OPEN_MODAL);
export const modalClose = createAction(CLOSE_MODAL);

export type ModalActions =
    | ReturnType<typeof modalOpen>
    | ReturnType<typeof modalClose>;