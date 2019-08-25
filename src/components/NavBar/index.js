import React from "react";
import "./NavBar.css";

export function NavBar(props) {
  const { txtbtn, btnFunc } = props;
  return (
    <nav className="cmp_Nav-Bar">
      <button type="button" onClick={btnFunc}>
        {txtbtn}
      </button>
    </nav>
  );
}
