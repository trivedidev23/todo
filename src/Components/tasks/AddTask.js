import React, { useState } from "react";
import TaskTable from "./TaskTable";
import { addTask } from "../actions/taskActions";
import { connect } from "react-redux";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    // document.getElementById("addTaskForm").reset();
  };
  return (
    <>
      <form
        id="addTaskForm"
        className="container"
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{ marginTop: "30px" }}
      >
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Add a Task
          </label>
          <input
            type="task"
            className="form-control"
            id="task"
            value={task}
            onChange={handleChangeTask}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
      <TaskTable />
    </>
  );
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(null, mapDispatchtoProps)(AddTask);
