import { configureStore, Middleware } from "@reduxjs/toolkit";
import { movieApi } from "./services/movieApi";
import { authReducer } from "./slices/authSlice";
import { queryReducer } from "./slices/searchQuerySlice";

const middlewares: Middleware[] = [movieApi.middleware];

export const store = configureStore({
    reducer: {
        query: queryReducer,
        auth: authReducer,
        [movieApi.reducerPath]: movieApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch; 