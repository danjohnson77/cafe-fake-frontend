import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResponsiveNavbar = ({ links }) => {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-wrap">
      <header className={`res-navbar`}>
        <div className="logo">
          <h1>
            <Link
              to="/"
              onClick={() => {
                setActive("Home");
              }}
            >
              CAFE<span className="logo-alt-color">FAKE</span>
            </Link>
          </h1>
        </div>
        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle"
          onChange={() => setOpen}
          checked={open}
        />
        <nav onClick={() => setOpen(!open)}>
          <ul>
            {links &&
              links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={link.path}
                      onClick={() => {
                        setOpen(!open);
                        setActive(link.navMenuName);
                      }}
                      className={
                        active === link.navMenuName ? "active" : undefined
                      }
                    >
                      {link.navMenuName}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
        <label
          htmlFor="nav-toggle"
          className="nav-toggle-label"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span></span>
        </label>
      </header>
    </div>
  );
};

export default ResponsiveNavbar;
