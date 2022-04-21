import { createReducer } from "@ngrx/store";

export interface AuthState {
    accessToken: string;
}
export const initialAuthState: AuthState = {
    accessToken: '',
}

export const authReducer = createReducer(
    initialAuthState,
)