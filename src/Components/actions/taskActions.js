export const addTask =
  (task) =>
  (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("todos")
      .add({
        task: task,
        date: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ADD_TASK",
          task,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_TASK_ERROR",
          err,
        });
      });
  };

export const removeTask =
  (task) =>
  (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("todos")
      .doc(task.id)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_TASK",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_TASK_ERROR",
        });
        console.log(err);
      });
  };

export const checkedTask =
  (task) =>
  (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("todos")
      .doc(task.id)
      .set(
        {
          ...task,
          toggle: !task.toggle,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({
          type: "TOGGLE_CHECKED",
          task,
        });
      })
      .catch((err) => {
        dispatch({
          type: "TOGGLE_CHECKED_ERROR",
          err,
        });
      });
  };
