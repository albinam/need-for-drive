const initialState = {

    city:null,
    point: null,
    car: null,
    color: null,
    rentDates: {
        dateFrom: null,
        dateTo: null
    },
    tariff: null,
    additions: []
}
export default function orderStepsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POINT':
            return {
                ...state,
                point: action.payload
            };
        case 'SET_CITY':
            return {
                ...state,
                city: action.payload
            };
        case 'SET_CAR':
            return {
                ...state,
                car: action.payload
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.payload
            };
        case 'SET_TARIFF':
            return {
                ...state,
                tariff: action.payload
            };
        case 'SET_RENT_DATES':
            return {
                ...state,
                rentDates: action.payload
            };
        case 'SET_ADDITIONS':
            return {
                ...state,
                additions: action.payload
            };
        default:
            return state;
    }
}