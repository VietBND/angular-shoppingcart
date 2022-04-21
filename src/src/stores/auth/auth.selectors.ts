import { createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducers";

export const authState = (state: AuthState) => state;
export const getAccessToken = createSelector(authState, state => state.accessToken);