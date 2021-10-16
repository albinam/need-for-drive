const initialState = {
    city:null,
    point: null,
    car: null,
    color: null,
    dateFrom: "",
    dateTo: "",
    duration:null,
    tariff: null,
    additions: [],
    price:null
}
export default function orderInfoReducer(state = initialState, action) {
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
        case 'SET_PRICE':
            return {
                ...state,
                price: action.payload
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
        case 'SET_DURATION':
            return {
                ...state,
                duration: action.payload
            };
        case 'SET_TARIFF':
            return {
                ...state,
                tariff: action.payload
            };
        case 'SET_DATE_FROM':
            return {
                ...state,
                dateFrom: action.payload
            };
        case 'SET_DATE_TO':
            return {
                ...state,
                dateTo: action.payload
            };
        case 'SET_ADDITIONS':
            return {
                ...state,
                additions:[...state.additions, action.payload]
            };
        case 'DELETE_ADDITIONS':
            return {
                ...state,
                additions:state.additions.filter(item => item !== action.payload)
            };
        default:
            return state;
    }
}