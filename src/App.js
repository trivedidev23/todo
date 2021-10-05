import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import DashBoard from "./Components/DashBoard/DashBoard";
import NavBar from "./Components/layout/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ToastContainer />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={DashBoard} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
