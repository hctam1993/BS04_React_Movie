import { localService } from "../../services/localService";
import { SET_USER } from "../constants/constantUser";

let initialState = {
  userInfo: localService.user.get(),
};

export const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      state.userInfo = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
