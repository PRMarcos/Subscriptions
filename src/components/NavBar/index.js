import React from "react";
import "./NavBar.css";
import { Button } from "../Button";
export function NavBar(props) {
  const { txtbtn, btnFunc } = props;
  return (
    <nav className="cmp_Nav-Bar">
      <Button small BtnType="button" btnFunc={btnFunc}>
        {txtbtn}
      </Button>
    </nav>
  );
}
