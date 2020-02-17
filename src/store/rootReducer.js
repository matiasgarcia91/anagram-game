import { combineReducers } from "redux";
import session from "./session/reducer";
import gameRooms from "./gameRooms/reducer";

export default combineReducers({
  session,
  gameRooms
});
