import { RootState } from './../app/store';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type billType ={
    billId?: string;
    billDate: string;
    clientName: string;
    sellerName: string;
    productList: object;
    totalPaid: number
}

export enum billFetchStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
  }

interface IBillState {
    bills: billType[],
    status: billFetchStatus,
    error: null | string,
}

const initialState: IBillState = {
    bills: [],
    status: billFetchStatus.IDLE,
    error: null
}

enum billURL {
    getAllBillsURL = 'https://don-raul-hs-felipe-sofkau.herokuapp.com/v1/api/allBills',
    postBillURL = 'https://don-raul-hs-felipe-sofkau.herokuapp.com/v1/api/postBill',
} 

export const getAllBills = createAsyncThunk('getAllBills', async () => {
    const response = await fetch(billURL.getAllBillsURL)
    return (await response.json()) as billType[]
  })

  export const postBill = createAsyncThunk('postReceipt', async (bill: billType) => {
    const response = await fetch(billURL.postBillURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(bill),
    })
    return (await response.json()) as billType
  })


export const billSlice = createSlice({
    name: 'bills',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        //get
        builder.addCase(getAllBills.pending, (state) => {
            state.status = billFetchStatus.PENDING
        })
        builder.addCase(getAllBills.fulfilled, (state, action) => {
            state.status = billFetchStatus.COMPLETED
            state.bills = action.payload
        })
        builder.addCase(getAllBills.rejected, (state, action) => {
            state.status = billFetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
            state.bills = []
        })
        //post
        builder.addCase(postBill.pending, (state) => {
            state.status = billFetchStatus.PENDING
        })
        builder.addCase(postBill.fulfilled, (state, action) => {
            state.status = billFetchStatus.COMPLETED
            state.bills.push(action.payload); 
        })
        builder.addCase(postBill.rejected, (state) => {
            state.status = billFetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
        })


    }

})


export const selectBillState = () => (state: RootState) => state.bills.bills
export const selectBillStatus = () => (state: RootState) => state.bills.status
export const selectBillFetchError = () => (state: RootState) => state.bills.error