import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./Navbar.scss";

const menuItems = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Blog", to: "/blog" },
  { id: 3, name: "About", to: "/about" },
];

const Navbar = () => {
  const { pathname } = useHistory().location;

  return (
    <div className="navbar__wrapper">
      <div className="navbar__logo">
        <h1 className="navbar__logo__main">Travelize</h1>
        <span className="navbar__logo__desc">My traveling experiences</span>
      </div>

      <div className="navbar__navitems">
        {menuItems.map((menuItem) => (
          <Link
            key={menuItem.id}
            to={menuItem.to}
            className={`navbar__navitem ${
              pathname === menuItem.to ? "navbar__navitem--active" : ""
            }`}
          >
            {menuItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
