import { combineReducers } from "@reduxjs/toolkit";
import { TLoaderActions } from "../actions";
import { LOADER_OFF, LOADER_ON } from "../constants/loader";

type TInitialAppState = {
    isLoading: boolean;
};

const initialAppState: TInitialAppState = {
    isLoading: false
};

export const loaderReducer = (state = initialAppState, action: TLoaderActions) => {
    switch (action.type) {
        case LOADER_ON: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOADER_OFF: {
            return {
                ...state,
                isLoading: false
            }
        }
        default: {
            return state;
        }
    }
}

export const rootReducer = combineReducers({
    loaderStore: loaderReducer,
});