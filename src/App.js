import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Landing from "./components/pages/landing/Landing";
import Menu from "./components/pages/menu/Menu";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/layout/Footer";

import MenuState from "./context/menu/MenuState";

import ResponsiveNavbar from "./components/nav/ResponsiveNavbar";

import "./scss/App.scss";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
});

const routes = [
  { path: "/", navMenuName: "Home", Component: Landing },
  {
    path: "/menu",
    navMenuName: "Menu",
    Component: Menu,
  },
  {
    path: "/menu/:menuId",

    Component: Menu,
    noNav: true,
  },
  { path: "/about", navMenuName: "About", Component: About },
  { path: "/contact", navMenuName: "Contact Us", Component: Contact },
];

function App() {
  return (
    <ApolloProvider client={client}>
      <MenuState>
        <Router>
          <div className="container">
            <ResponsiveNavbar
              links={routes
                .filter(({ noNav }) => {
                  if (noNav) return false;
                  return true;
                })
                .map(({ navMenuName, path }) => {
                  return { navMenuName, path };
                })}
            />
            <div className="content">
              {routes.map(({ path, Component }, index) => (
                <Route key={path} exact path={path} component={Component} />
              ))}
            </div>
            <Footer />
          </div>
        </Router>
      </MenuState>
    </ApolloProvider>
  );
}

export default App;
