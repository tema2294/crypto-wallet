import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {updateUserWatcher} from "../store/sagas/updateUser";

export interface CounterState {
    coinsName : any[],
    coinsWithFullData: any[],
    isLoading: boolean,
    user?: any
}

const initialState: CounterState = {
    coinsName : [],
    coinsWithFullData: [],
    isLoading: true
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        addInitialCoinName:(state,action: PayloadAction<any[]>) => {
            state.coinsName = action.payload
        },
        addCoin: (state,action: PayloadAction<string>) => {
            return state
        },
        addCoinWithFullInfo: (state,action: PayloadAction<any>) => {
            const coin  = action.payload
            state.coinsWithFullData = [...state.coinsWithFullData , coin]
        },
        loadAllCoins: (state) => {
            return state
        },
        authorize: (state,action:PayloadAction<{username: string,password: string}>) => {
            return state
        },
        setLoading: (state,action:PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setUser: (state,action:PayloadAction<any>) => {
            state.user = action.payload
        },
        updateUser: (state,action:PayloadAction<{ username?:string,newUsername?:string,password?:string,coins:any[] }>) => {
            return state
        },
    },
})

export const walletActions = walletSlice.actions
