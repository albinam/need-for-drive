import { combineReducers } from "redux";
import orderInfoReducer from "./reducers/orderInfoReducer";
import stepReducer from "./reducers/orderStepsReducer";
import userLocationReducer from "./reducers/userLocationReducer";

const rootReducer = combineReducers({
    order: orderInfoReducer,
    step: stepReducer,
    userLocation:userLocationReducer
});

export default rootReducer;