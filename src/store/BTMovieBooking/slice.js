import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    number: 100,
    gheVuaDat: ['c3', 'c4'],
    chairsBooking: [],
    chairsBooked: [],
}

//reducer o day la gia tri mac dinh state cua minh

export const btMovieBookingSlice = createSlice({
    name: 'BTMovieBooking',
    initialState,
    reducers: {
        demo: (state, action) => {},
        inCreaseNumber: (state, action) => {
            console.log('action: ', action)
            state.number += action.payload
            //immerjs cua redux giup khong can  phai return ve state
        },
        setChairsBooking: (state, { payload }) => {
            // console.log('action: ', action)
            const index = state.chairsBooking.findIndex((value) => value.soGhe === payload.soGhe)
            if (index !== -1) {
                // state.chairsBooking = state.chairsBooking.filter(
                //     (value) => value.soGhe !== payload.soGhe
                // )
                state.chairsBooking.splice(index, 1)
            } else {
                state.chairsBooking.push(payload)
            }
        },
        setChairsBooked: (state, { payload }) => {
            state.chairsBooked = [...state.chairsBooked, ...state.chairsBooking]
            state.chairsBooking = []
        },
    },
})

export const { reducer: btMovieBookingReducer, actions: btMovieBookingActions } =
    btMovieBookingSlice
