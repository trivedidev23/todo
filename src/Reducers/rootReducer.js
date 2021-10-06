import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import taskReducer from "./taskAdd";
import authReducers from "./authReducers";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  task: taskReducer,
  auth: authReducers,
});

export default rootReducer;
