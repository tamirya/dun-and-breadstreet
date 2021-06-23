import { searchReducer as search } from "./searchReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({ search });

export default allReducers;
