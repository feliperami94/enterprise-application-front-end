import { RootState } from './../app/store';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type receiptType ={
    receiptId?: string;
    productQuantity: number;
    receiptProductId: string;
    receiptDate: string;
    providerId: string;
}

export enum receiptFetchStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
  }

interface IReceiptState {
    receipts: receiptType[],
    status: receiptFetchStatus,
    error: null | string,
}

const initialState: IReceiptState = {
    receipts: [],
    status: receiptFetchStatus.IDLE,
    error: null
}

enum receiptURL {
    getAllReceiptsURL = 'https://don-raul-hs-felipe-sofkau.herokuapp.com/v1/api/allReceipts',
    postReceiptURL = 'https://don-raul-hs-felipe-sofkau.herokuapp.com/v1/api/postReceipt',
} 

export const getAllReceipts = createAsyncThunk('getAllReceipts', async () => {
    const response = await fetch(receiptURL.getAllReceiptsURL)
    return (await response.json()) as receiptType[]
  })

  export const postReceipt = createAsyncThunk('postReceipt', async (receipt: receiptType) => {
    const response = await fetch(receiptURL.postReceiptURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(receipt),
    })
    return (await response.json()) as receiptType
  })


export const receiptSlice = createSlice({
    name: 'receipts',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        //get
        builder.addCase(getAllReceipts.pending, (state) => {
            state.status = receiptFetchStatus.PENDING
        })
        builder.addCase(getAllReceipts.fulfilled, (state, action) => {
            state.status = receiptFetchStatus.COMPLETED
            state.receipts = action.payload
        })
        builder.addCase(getAllReceipts.rejected, (state, action) => {
            state.status = receiptFetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
            state.receipts = []
        })
        //post
        builder.addCase(postReceipt.pending, (state) => {
            state.status = receiptFetchStatus.PENDING
        })
        builder.addCase(postReceipt.fulfilled, (state, action) => {
            state.status = receiptFetchStatus.COMPLETED
            state.receipts.push(action.payload); 
        })
        builder.addCase(postReceipt.rejected, (state) => {
            state.status = receiptFetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
        })


    }

})


export const selectReceiptState = () => (state: RootState) => state.receipts.receipts
export const selectReceiptStatus = () => (state: RootState) => state.receipts.status
export const selectReceiptFetchError = () => (state: RootState) => state.receipts.error