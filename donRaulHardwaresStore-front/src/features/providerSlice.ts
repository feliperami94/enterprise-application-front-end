import { RootState } from './../app/store';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type providerType ={
    providerId?: string;
    providerName: string;
    providerPhone: string;
    providerPassport: string;
    availability: boolean;
}

export enum providerFetchStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
  }

interface IProvidersState {
    providers: providerType[],
    status: providerFetchStatus,
    error: null | string,
}

const initialState: IProvidersState = {
    providers: [],
    status: providerFetchStatus.IDLE,
    error: null
}

enum providerURL {
    getAllProvidersURL = 'http://localhost:8080/v1/api/all-providers',
    postProviderURL = 'http://localhost:8080/v1/api/postProvider',
    putProviderURL = 'http://localhost:8080/v1/api/putProvider' 
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
        builder.addCase(getAllProviders.pending, (state) => {
            state.status = providerFetchStatus.PENDING
        })
        builder.addCase(getAllProviders.fulfilled, (state, action) => {
            state.status = providerFetchStatus.COMPLETED
            state.providers = action.payload
        })
        builder.addCase(getAllProviders.rejected, (state, action) => {
            state.status = providerFetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
            state.providers = []
        })
        //post
        builder.addCase(postProvider.pending, (state) => {
            state.status = providerFetchStatus.PENDING
        })
        builder.addCase(postProvider.fulfilled, (state, action) => {
            state.status = providerFetchStatus.COMPLETED
            state.providers.push(action.payload); 
        })
        builder.addCase(postProvider.rejected, (state) => {
            state.status = providerFetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
        })
        //put
        builder.addCase(putProvider.pending, (state) => {
            state.status = providerFetchStatus.PENDING
        })
        builder.addCase(putProvider.fulfilled, (state, action) => {
            state.status = providerFetchStatus.COMPLETED
            let providerFocus = state.providers.filter(provider=>provider.providerId === action.payload.providerId)[0];
            let providerFocusPosition = state.providers.indexOf(providerFocus);
            state.providers[providerFocusPosition] = action.payload;
          })
        builder.addCase(putProvider.rejected, (state) => {
            state.status = providerFetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
        })

    }

})


// export default providerSlice.reducer;
export const selectProviderState = () => (state: RootState) => state.providers.providers
export const selectProviderStatus = () => (state: RootState) => state.providers.status
export const selectProviderFetchError = () => (state: RootState) => state.providers.error