import React from "react";
import { Button } from "../Button";
import { Container } from "./style";

export function NavBar(props) {
  const { txtbtn, btnFunc, children } = props;
  return (
    <Container>
      <Button small BtnType="button" btnFunc={btnFunc}>
        {txtbtn}
      </Button>
      {children}
    </Container>
  );
}
