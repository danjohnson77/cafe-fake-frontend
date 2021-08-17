import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { useQuery } from "react-apollo";
import { MENU_QUERY } from "../../../../queries/menu";

import MenuContext from "../../../../context/menu/menuContext";
import Spinner from "../../../layout/Spinner";

const MenuSelect = () => {
  const menuContext = useContext(MenuContext);

  const { loading, data, error } = useQuery(MENU_QUERY);

  if (loading) return <Spinner />;
  if (error) return <h1>Error</h1>;

  const { menuCategories } = data;

  const menu = menuCategories.map((category, index) => {
    const {
      name,
      id,
      default_menu_subcategory,
      background: { url },
    } = category;

    const defaultSub = default_menu_subcategory.name;
    const imageUrl = `${url}`;

    return (
      <Link
        to={`/menu/${name}`}
        key={index}
        onClick={() => {
          menuContext.setMenu(name, id);
          menuContext.setSubmenu(defaultSub);
        }}
      >
        <div className="menu-select-panel">
          <div
            className="menu-select-panel-bg"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="menu-select-panel-text-wrap">
            <h1>{name}</h1>
          </div>
        </div>
      </Link>
    );
  });
  return <div className="menu-select">{menu}</div>;
};

export default MenuSelect;
