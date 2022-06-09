import { configureStore } from "@reduxjs/toolkit";
import {providerSlice } from "../features/providerSlice";
import { useDispatch } from 'react-redux'
import loggedInReducer from '../features/loggedinSlice'



export const store = configureStore({
    reducer:{
        providers: providerSlice.reducer,
        logged: loggedInReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
