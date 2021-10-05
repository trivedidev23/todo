import React from "react";
import SingleTask from "./SingleTask";

const TaskTable = () => {
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
          <SingleTask />
        </tbody>
      </table>
    </>
  );
};

export default TaskTable;
