import { SET_MENU, SET_SUBMENU } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case SET_SUBMENU:
      return {
        ...state,
        submenu: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
