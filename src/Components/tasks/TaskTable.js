import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import SingleTask from "./SingleTask";

const TaskTable = ({ todos }) => {
  return (
    <>
      <table
        className="table table-dark table-striped container"
        style={{ marginTop: "30px" }}
      >
        <thead>
          <tr className="text-info">
            <th scope="col">Tasks</th>
            <th scope="col">Added On</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((task) => <SingleTask task={task} key={task.id} />)}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  const todos = state.firestore.ordered.todos;
  return {
    todos: todos,
    uid: state.firebase.auth.uid,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "todos",
      where: ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(TaskTable);
