import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import {walletSlice} from "../reducers/walletSlice";
import rootSaga from "./sagas/rootSaga";



const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: walletSlice.reducer,
    middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch