import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import AddTask from "../tasks/AddTask";

const DashBoard = ({ uid }) => {
  if (!uid) return <Redirect to="/signin" />;
  return (
    <>
      <div className="container" style={{ marginTop: "30px" }}>
        <h3>Dashboard</h3>
        <AddTask />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

export default connect(mapStateToProps)(DashBoard);
