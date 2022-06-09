import { RootState } from './../app/store';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type providerType ={
    providerId?: string;
    providerName: string;
    providerPhone: string;
    providerPassport: string;
    availability: boolean;
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
    postProviderURL = 'http://localhost:8080/v1/api/postProvider',
    putProviderURL = 'http://localhost:8080/v1/api/' 
} 

export const getAllProviders = createAsyncThunk('getAllProviders', async () => {
    const response = await fetch(providerURL.getAllProvidersURL)
    return (await response.json()) as providerType[]
  })

  export const postProvider = createAsyncThunk('postProvider', async (provider: providerType) => {
    const response = await fetch(providerURL.postProviderURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(provider),
    })
    return (await response.json()) as providerType
  })

  export const putProvider = createAsyncThunk('putProvider', async (provider: providerType) => {
    const response = await fetch(providerURL.putProviderURL, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(provider),
    })
    return (await response.json()) as providerType
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