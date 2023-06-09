import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import Settings from "./Settings";
import Auth from "./Auth";
import Notes from "./Notes";
import Common from "./Common";


const reducers = combineReducers({
  routing: routerReducer,
  settings: Settings,
  auth: Auth,
  notes: Notes,
  common: Common,
});

export default reducers;
