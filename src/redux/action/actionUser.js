import { userServ } from "../../services/userService";
import { SET_USER } from "../constants/constantUser";
import { localService } from "../../services/localService";

const setUserLoginSuccess = (successValue) => {
  return {
    type: SET_USER,
    payload: successValue,
  };
};
export const setUserLoginActionServ = (
  dataLogin,
  onLoginSuccess,
  onLoginFail
) => {
  return (dispatch) => {
    userServ
      .postLogin(dataLogin)
      .then((res) => {
        localService.user.set(res.data.content);
        // console.log(res);
        onLoginSuccess();
        dispatch(setUserLoginSuccess(res.data.content));
      })
      .catch((err) => {
        // console.log(err);
        onLoginFail();
      });
  };
};
