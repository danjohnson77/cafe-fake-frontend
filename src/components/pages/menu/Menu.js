import React from "react";

import { useParams } from "react-router-dom";

import MenuSelect from "./content/MenuSelect";
import SubMenu from "./content/SubMenu";

const Menu = () => {
  let menuId = useParams();

  menuId = Object.entries(menuId).length > 0 ? menuId : false;
  const id = menuId.menuId;

  return id ? <SubMenu menu={id} /> : <MenuSelect />;
};

export default Menu;
