const initialState = {
    location: {
        latitude: 54.3399097,
        longitude: 48.3826817,
    },
    city: null
}

export default function userLocationReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOCATION':
            return {
                ...state,
                location: action.payload
            };
        default:
            return state;
    }
}