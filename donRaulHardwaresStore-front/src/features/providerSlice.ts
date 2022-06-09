import { RootState } from './../app/store';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type providerType ={
    providerId: string;
    providerName: string;
    providerPhone: string;
    providerPassport: string;
}

export enum fetchStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
  }

interface IProvidersState {
    providers: providerType[],
    status: fetchStatus,
    error: null | string,
}

const initialState: IProvidersState = {
    providers: [],
    status: fetchStatus.IDLE,
    error: null
}

enum providerURL {
    getAllProvidersURL = 'http://localhost:8080/v1/api/all-providers',
} 

export const getAllProviders = createAsyncThunk('getAllProviders', async () => {
    const response = await fetch(providerURL.getAllProvidersURL)
    return (await response.json()) as providerType[]
  })

export const providerSlice = createSlice({
    name: 'providers',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        //get
        builder.addCase(getAllProviders.pending, (state, action) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(getAllProviders.fulfilled, (state, action) => {
            state.status = fetchStatus.COMPLETED
            state.providers = action.payload
        })
        builder.addCase(getAllProviders.rejected, (state, action) => {
            state.status = fetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
            state.providers = []
        })

    }

})


// export default providerSlice.reducer;
export const selectProviderState = () => (state: RootState) => state.providers.providers
export const selectProviderStatus = () => (state: RootState) => state.providers.status
export const selectProviderFetchError = () => (state: RootState) => state.providers.error