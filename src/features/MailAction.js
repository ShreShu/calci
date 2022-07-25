import axios from "axios";
import { formatEmail } from "../Util/UserNameFormat";
import { userActions } from "./userSlice";

export const fetchInbox = () => {
  const user = formatEmail(localStorage.getItem("userMail"));
  return async (dispatch) => {
    console.log(user);
    const fetchData = async () => {
      const response = await axios.get(
        `https://mail-box-client-948c9-default-rtdb.firebaseio.com/${user}/inbox.json`
      );

      let arrayOfObj = Object.keys(response.data)?.map((key) => {
        return { ...response.data[key], key };
      });

      dispatch(userActions.inbox(arrayOfObj));
      console.log(arrayOfObj);
    };
    try {
      fetchData();
    } catch (e) {}
  };
};

export const fetchSent = () => {
  const user = formatEmail(localStorage.getItem("userMail"));
  return async (dispatch) => {
    console.log(user);
    const fetchData = async () => {
      const response = await axios.get(
        `https://mail-box-client-948c9-default-rtdb.firebaseio.com/${user}/sent.json`
      );

      let arrayOfObj = Object.keys(response.data)?.map((key) => {
        return { ...response.data[key], key };
      });

      dispatch(userActions.sent(arrayOfObj));
      console.log(arrayOfObj);
    };
    try {
      fetchData();
    } catch (e) {}
  };
};
