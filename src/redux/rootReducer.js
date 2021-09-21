import { combineReducers } from "redux";
import orderInfoReducer from "./reducers/orderInfoReducer";
import stepReducer from "./reducers/orderStepsReducer";

const rootReducer = combineReducers({
    order: orderInfoReducer,
    step: stepReducer,
});

export default rootReducer;