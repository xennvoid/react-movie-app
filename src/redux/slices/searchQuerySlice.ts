import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    query: string
}

const initialState: InitialState = {
    query: ''
}

const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        changeSearchQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
    }
})

export const { changeSearchQuery } = querySlice.actions;
export const queryReducer = querySlice.reducer;