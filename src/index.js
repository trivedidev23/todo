import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import {
  getFirebase,
  isLoaded,
  ReactReduxFirebaseProvider,
} from "react-redux-firebase";
import firebase from "./config/fbConfig";
import App from "./App";
import rootReducer from "./Reducers/rootReducer";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createFirestoreInstance } from "redux-firestore";
import { useSelector } from "react-redux";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="text-center">
        <div
          className="spinner-grow text-primary"
          style={{ width: "7rem", height: "7rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return children;
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
