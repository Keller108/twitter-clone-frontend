import { ThunkAction } from "@reduxjs/toolkit";
import { LoaderActions, ModalActions } from "../../services/actions";
import { PostActions } from "../../services/actions/post";
import { rootReducer } from "../../services/reducers";

export { ModalType } from './ModalType';

export type RootState = ReturnType<typeof rootReducer>;

export type TApplicationActions = LoaderActions | ModalActions | PostActions;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;

export type AppDispatch<ReturnType = void> = (action: TApplicationActions | AppThunk<ReturnType>) => ReturnType;