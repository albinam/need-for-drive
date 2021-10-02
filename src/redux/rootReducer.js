import { combineReducers } from "redux";
import orderInfoReducer from "./reducers/orderInfoReducer";
import stepReducer from "./reducers/orderStepsReducer";
import userLocationReducer from "./reducers/userLocationReducer";
import apiInfoReducer from "./reducers/apiInfoReducer";

const rootReducer = combineReducers({
    order: orderInfoReducer,
    step: stepReducer,
    userLocation:userLocationReducer,
    apiInfo:apiInfoReducer
});

export default rootReducer;