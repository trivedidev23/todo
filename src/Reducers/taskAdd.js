import { toast } from "react-toastify";

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK":
      toast.success("Task Added");
      return state;
    case "ADD_TASK_ERROR":
      toast.error("Error Occured");
      break;
    case "REMOVE_TASK":
      toast.warning("Task Removed");
      return state;
    case "REMOVE_TASK_ERROR":
      toast.error("Error Occured");
      return state;
    case "TOGGLE_CHECKED":
      toast.info("Status Updated");
      return state;
    case "TOGGLE_CHECKED_ERROR":
      toast.error("Error Occured");
      return state;
    default:
      return state;
  }
};

export default taskReducer;
