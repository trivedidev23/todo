export const signIn =
  (creds) =>
  (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({
          type: "SIGN_IN",
        });
      })
      .catch((err) => {
        dispatch({
          type: "SIGN_IN_ERROR",
          err,
        });
      });
  };

export const signOut =
  () =>
  (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGN_OUT",
        });
      })
      .catch((err) => {
        dispatch({
          type: "SIGN_OUT_ERROR",
          err,
        });
      });
  };

export const signUp =
  (creds) =>
  (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({
          type: "SIGN_UP",
        });
      })
      .catch((err) => {
        dispatch({
          type: "SIGN_UP_ERROR",
          err,
        });
      });
  };
