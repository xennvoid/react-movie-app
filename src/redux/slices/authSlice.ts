import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILoggedUser {
    login: string;
    email: string;
    password: string;
    confirm: string;
}

type InitialState = {
    authorized: boolean;
    user: ILoggedUser | null;
}

const initialState: InitialState = {
    authorized: false,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeAuthStatus: (state, action: PayloadAction<ILoggedUser | null>) => {
            state.authorized = !state.authorized;
            state.user = action.payload;
        },
    }
})

export const { changeAuthStatus } = authSlice.actions;
export const authReducer = authSlice.reducer;