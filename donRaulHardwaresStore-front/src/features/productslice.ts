import { RootState } from './../app/store';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type productType ={
    productId?: string;
    productName: string;
    description: string;
    productQuantity: number;
    productPrice: number;
    minQuantity: number;
    maxQuantity: number;
    providerId: string;
}

export enum fetchStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
  }

interface IProductState {
    products: productType[],
    status: fetchStatus,
    error: null | string,
}

const initialState: IProductState = {
    products: [],
    status: fetchStatus.IDLE,
    error: null
}

enum productsURL {
    getAllProductsURL = 'http://localhost:8080/v1/api/allProducts',
    postProductsURL = 'http://localhost:8080/v1/api/postProduct',
} 

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const response = await fetch(productsURL.getAllProductsURL)
    return (await response.json()) as productType[]
  })

  export const postProduct = createAsyncThunk('postProduct', async (product: productType) => {
    const response = await fetch(productsURL.postProductsURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(product),
    })
    return (await response.json()) as productType
  })


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        //get
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.status = fetchStatus.COMPLETED
            state.products = action.payload
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.status = fetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
            state.products = []
        })
          //post
        builder.addCase(postProduct.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(postProduct.fulfilled, (state, action) => {
            state.status = fetchStatus.COMPLETED
            state.products.push(action.payload); 
        })
        builder.addCase(postProduct.rejected, (state) => {
            state.status = fetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
        })

    }

})


// export default providerSlice.reducer;
export const selectProductState = () => (state: RootState) => state.products.products
export const selectProductStatus = () => (state: RootState) => state.products.status
export const selectProductFetchError = () => (state: RootState) => state.products.error