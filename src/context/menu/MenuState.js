import React, { useReducer } from "react";

import { SET_MENU, SET_SUBMENU } from "../types";
import MenuContext from "./menuContext";
import MenuReducer from "./menuReducer";

const MenuState = ({ children }) => {
  const initialState = {
    menu: {},
    submenu: {},
  };

  const [state, dispatch] = useReducer(MenuReducer, initialState);

  const setMenu = (name, id) => {
    dispatch({
      type: SET_MENU,
      payload: { name, id },
    });
  };

  const setSubmenu = (name, id) => {
    dispatch({
      type: SET_SUBMENU,
      payload: { name, id },
    });
  };

  return (
    <MenuContext.Provider
      value={{ menu: state.menu, submenu: state.submenu, setMenu, setSubmenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuState;
