import { combineReducers } from 'redux'
import { demoReduxReducer } from './demoRedux/reducer'
import { btPhoneReducer } from './BTPhone/reducer'
import { btMovieBookingReducer } from './BTMovieBooking/slice'
import { btFormReducer } from './BTForm/slice'

export const rootReducer = combineReducers({
    demoRedux: demoReduxReducer,
    btPhone: btPhoneReducer,
    btMovieBooking: btMovieBookingReducer,
    btForm: btFormReducer,
})

// rootReducer = {
//     demoRedux: {
//         number: 10,
//         name: 'ABC',
//         age: 20,
//     }
// }
