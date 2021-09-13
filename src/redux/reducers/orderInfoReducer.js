const initialState = {
   point:null,
    car:null,
    color:null,
    rentDates:{
       dateFrom:null,
        dateTo:null
    },
    tariff:null,
    additions:[null]
}
export default function orderStepsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POINT':
            return {
                ...state,
                point:action.payload.point
            };
        case 'SET_CAR':
            return {
                ...state,
                car:action.payload.car
            };
        case 'SET_COLOR':
            return {
                ...state,
                color:action.payload.color
            };
        case 'SET_TARIFF':
            return {
                ...state,
                tariff:action.payload.tariff
            };
        case 'SET_RENT_DATES':
            return {
                ...state,
                rentDates:action.payload.rentDates
            };
        case 'SET_ADDITIONS':
            return {
                ...state,
                additions:action.payload.additions
            };
        default:
            return state;
    }
}