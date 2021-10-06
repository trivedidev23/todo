import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { signUp } from "../actions/authActions";

const SignUp = ({ signUp, uid }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleChangePasswd = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({ email, password });
    console.log({ email, password });
  };

  if (uid) return <Redirect to="/" />;
  return (
    <>
      <form
        className="container"
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ marginTop: "30px" }}
      >
        <legend>
          <h1>Sign Up</h1>
        </legend>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handleChangePasswd}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
