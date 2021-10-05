import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { checkedTask, removeTask } from "../actions/taskActions";
import Check from "./Check";

const SingleTask = ({ task, removeTask, checkedTask }) => {
  const handleRemove = (task) => {
    removeTask(task);
  };

  const handleClick = (task) => {
    checkedTask(task);
    // setToggle(!task.toggle);
    console.log(task);
  };
  return (
    <>
      <tr>
        {/* <th scope="row">{task.task.task.task.task}</th> */}
        <th scope="row">{task.task}</th>
        <td>{moment(task.date.toDate()).calendar()}</td>
        <td>
          <Check onClick={() => handleClick(task)} toggle={task.toggle} />
        </td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(task)}
          >
            delete
          </span>
        </td>
      </tr>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (task) => dispatch(removeTask(task)),
    checkedTask: (task) => dispatch(checkedTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(SingleTask);
