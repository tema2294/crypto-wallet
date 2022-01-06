import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    coinsWithFullData: any[]
    isLoading: boolean,
    user?: any
}

const initialState: CounterState = {
    coinsWithFullData: [],
    isLoading: true
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {

        addCoinWithFullInfo: (state,action: PayloadAction<any>) => {
            const coin  = action.payload
            state.coinsWithFullData = [...state.coinsWithFullData , coin]
        },
        addCoin: (state)=> {
            return state
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
            state.coinsWithFullData = []
            state.user = action.payload
        },
        updateUser: (state,action:PayloadAction<{ username?:string,newUsername?:string,password?:string,coins:any[] }>) => {
            return state
        },
        getUserInfo: (state)=> {
           return state
        }
    },
})

export const walletActions = walletSlice.actions
