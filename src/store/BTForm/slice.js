import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [],
    productEdit: undefined,
}

const BTFormSlice = createSlice({
    name: 'BTForm',
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            console.log('payload: ', payload)
            state.productList.push(payload)
        },
        deleteProduct: (state, { payload }) => {
            console.log('payload: ', payload)
            state.productList = state.productList.filter((value) => value.id !== payload)
        },
        setProductEdit: (state, { payload }) => {
            console.log('payload: ', payload)
            state.productEdit = payload
        },
    },
})

export const { reducer: btFormReducer, actions: btFormActions } = BTFormSlice
