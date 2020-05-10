import axios from "axios";
import { REGISTRATION_SUCCESS, REGISTRATION_FAIL } from "./constants";
import { setAlert } from "./alert";

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users", body, config);

    //dispatch(setAlert("${name} you have registered successfully", "success"));
    dispatch({
      type: REGISTRATION_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const listOfErrors = err.response.data.errors;
    console.log(typeof listOfErrors);

    if (listOfErrors) {
      console.log("errors are present");
      listOfErrors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTRATION_FAIL,
    });
  }
};
