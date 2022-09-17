import { SET_LOADING_OFF, SET_LOADING_ON } from "../constants/constantSpinner";

let InitialState = {
  isLoading: true,
};

export const reducerSpinner = (state = InitialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_ON: {
      return { ...state, isLoading: true };
    }
    case SET_LOADING_OFF: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
};
