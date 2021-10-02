const initialState = {
    points:[],
    markers:[],
    cities:[],
    citiesCoords:[]
}
export default function apiInfoReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POINTS':
            return {
                ...state,
                points:[...state.points, action.payload]
            };
        case 'SET_CITIES':
            return {
                ...state,
                cities:[...state.cities, action.payload]
            };
        case 'SET_CITIESCOORDS':
            return {
                ...state,
                citiesCoords:[...state.citiesCoords, action.payload]
            };
        case 'SET_MARKERS':
            return {
                ...state,
                markers:[...state.markers, action.payload]
            };
        default:
            return state;
    }
}