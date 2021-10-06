import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../actions/authActions";

const NavItems = ({ signOut, uid }) => {
  if (uid) {
    return (
      <Link to="/signin" className="nav-link" onClick={signOut}>
        Sign Out
      </Link>
    );
  } else {
    return (
      <>
        <Link to="/signin" className="nav-link">
          Sign In
        </Link>
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItems);
