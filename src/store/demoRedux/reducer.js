const initialState = {
    number: 1000,
    name: 'ABC',
    age: 20,
}

export const demoReduxReducer = (state = initialState, action) => {
    // console.log('action: ', action)
    switch (action.type) {
        case 'INCREASE_NUMBER': {
            state.number = state.number + action.payload
            return { ...state }
        }
        case 'DECREASE_NUMBER': {
            state.number = state.number + action.payload
            return { ...state }
        }
        default:
            return state
    }
}
