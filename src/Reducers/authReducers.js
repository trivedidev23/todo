import { toast } from "react-toastify";

const authReducers = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast("Welcome Back");
      return state;
    case "SIGN_IN_ERROR":
      toast.error("Error Occured");
      return state;
    case "SIGN_OUT":
      toast("Good Bye");
      return state;
    case "SIGN_OUT_ERROR":
      toast.error("Error Occured");
      return state;
    case "SIGN_UP":
      toast("Welcome");
      return state;
    case "SIGN_UP_ERROR":
      toast.error("Error Occured");
      return state;
    default:
      return state;
  }
};

export default authReducers;
