const initialState = {
    latLon: {
        latitude: 54.3399097,
        longitude:  48.3826817
    }
}
export default function userLocationReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_LATLON':
            return {
                ...state,
                latLon: action.payload
            };
        default:
            return state;
    }
}