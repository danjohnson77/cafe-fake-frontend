import React, { useContext } from "react";

import { useQuery } from "react-apollo";
import { SUBMENU_QUERY } from "../../../../queries/menu";

import MenuContext from "../../../../context/menu/menuContext";
import SubMenuItems from "./SubMenuItems";

import FixedImgBg from "../../../layout/FixedImgBg";
import Spinner from "../../../layout/Spinner";
import { Link } from "react-router-dom";

const SubMenu = ({ menu }) => {
  const menuContext = useContext(MenuContext);

  const { loading, error, data } = useQuery(SUBMENU_QUERY, {
    variables: { menu },
    onCompleted: () => {
      menuContext.setMenu(data.menuCategories[0].name);
      menuContext.setSubmenu(
        data.menuCategories[0].default_menu_subcategory.name
      );
    },
  });

  if (loading) return <Spinner />;
  if (error) return <h1>Error</h1>;

  const {
    background: { url },
    menu_subcategories,
    name,
  } = data.menuCategories[0];

  const subCategoryList = menu_subcategories.map((cat, index) => {
    return (
      <li
        key={index}
        onClick={() => menuContext.setSubmenu(cat.name)}
        className={cat.name === menuContext.submenu.name ? "active" : ""}
      >
        {cat.name}
      </li>
    );
  });

  return (
    <div className="sub-menu">
      <FixedImgBg imageUrl={url} />

      <div className="sub-menu-header">
        <h1 className="page-heading">{name}</h1>

        <div className="sub-menu-categories">
          <ul>{subCategoryList}</ul>
        </div>
      </div>

      {menuContext.submenu.name && <SubMenuItems />}
      <Link to={"/menu"}>
        <Button>GO BACK</Button>
      </Link>
    </div>
  );
};

export default SubMenu;
