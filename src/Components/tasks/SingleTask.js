import React from "react";

const SingleTask = () => {
  return (
    <>
      <tr>
        <th scope="row">Learn React</th>
        <td>06/10/2021</td>
        <td>
          <span className="material-icons " style={{ cursor: "pointer" }}>
            check_circle
          </span>
        </td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
          >
            delete
          </span>
        </td>
      </tr>
    </>
  );
};

export default SingleTask;
