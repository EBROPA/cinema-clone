import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from "../store/slices/userSlice"
import { createSlice } from "@reduxjs/toolkit"

const userSlices = createSlice({
    name: 'user',
    initialState: {
        movies: [],
    },
    reducers: {
        setMovie(state, action) {
            state.movies = action.payload.movies;
        },
    },
});

const rootReducer = combineReducers({
    user: userReducer,
    user: userSlices.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const { setMovie } = userSlices.actions;
export const persistor = persistStore(store)
export default store;