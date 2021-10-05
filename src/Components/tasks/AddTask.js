import React, { useState } from "react";
import TaskTable from "./TaskTable";

const AddTask = () => {
  const [task, setTask] = useState("");

  const handleChangeTask = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
  };
  return (
    <>
      <form
        className="container"
        autoComplete="off"
        onSubmit={handleSubmit}
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

export default AddTask;
