import { ThunkAction } from "@reduxjs/toolkit";
import { TLoaderActions } from "../../services/actions";
import { rootReducer } from "../../services/reducers";

export type RootState = ReturnType<typeof rootReducer>;

export type TApplicationActions = TLoaderActions;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;

export type AppDispatch<ReturnType = void> = (action: TApplicationActions | AppThunk<ReturnType>) => ReturnType;