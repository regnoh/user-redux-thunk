import {combineReducers} from "redux";
import counter from "./counter";
import user from "./user";
const rootReducer = combineReducers({
    counter,//counter:counter
    user
});
export default rootReducer;












