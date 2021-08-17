import React, { useContext } from "react";
import { useQuery } from "react-apollo";
import { ITEMS_QUERY } from "../../../../queries/menu";

import MenuContext from "../../../../context/menu/menuContext";

import Spinner from "../../../layout/Spinner";

const SubMenuItems = () => {
  const menuContext = useContext(MenuContext);

  const { loading, error, data } = useQuery(ITEMS_QUERY, {
    variables: {
      menu: menuContext.menu.name,
      submenu: menuContext.submenu.name,
    },
  });

  if (loading) return <Spinner />;
  if (error) return <h1>Error</h1>;

  const { items } = data;
  const menuItems = items.map((item, index) => {
    const { name, description, price } = item;
    return (
      <div className="sub-menu-item" key={index}>
        <h3>{name}</h3>
        <p className="page-text description">{description}</p>
        <p>{price}</p>
      </div>
    );
  });
  return <div className="sub-menu-items">{menuItems}</div>;
};

export default SubMenuItems;
