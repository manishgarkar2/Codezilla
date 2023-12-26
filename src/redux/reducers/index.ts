import { combineReducers } from "redux";
import users from './users';
import taskData from "./taskData";



const rootReducer = combineReducers({
    userDetails: users,
    taskData:taskData
});
export default rootReducer;