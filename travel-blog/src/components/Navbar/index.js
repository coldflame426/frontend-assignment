import React from "react";

import "./Navbar.scss";

const menuItems = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Blog", to: "/blog" },
  { id: 3, name: "About", to: "/about" },
];

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar__logo">
        <h1 className="navbar__logo__main">Travelize</h1>
        <span className="navbar__logo__desc">My traveling experiences</span>
      </div>

      <div className="navbar__navitems">
        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className="navbar__navitem">
            {menuItem.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
