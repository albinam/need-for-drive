export default function orderStepsReducer(state = 0, action) {
    switch (action.type) {
        case 'SET_STEP':
            return action.payload;
        default:
            return state;
    }
}