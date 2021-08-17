import gql from "graphql-tag";

export const MENU_QUERY = gql`
  query Menu {
    menuCategories(sort: "order") {
      id
      name
      order
      default_menu_subcategory {
        name
      }
      background {
        url
      }
    }
  }
`;

export const SUBMENU_QUERY = gql`
  query($menu: String!) {
    menuCategories(where: { name: $menu }) {
      name
      background {
        url
      }
      default_menu_subcategory {
        name
      }
      menu_subcategories {
        name
      }
    }
  }
`;

export const ITEMS_QUERY = gql`
  query($menu: String!, $submenu: String!) {
    items(
      where: {
        menu_category: { name: $menu }
        menu_subcategory: { name: $submenu }
      }
    ) {
      name
      description
      price
    }
  }
`;
