import React from "react";
import "./Button.css";
import { Btn } from "./style";

export function Button(props) {
  const { Disabled, BtnType, btnFunc, children } = props;
  return (
    <Btn disabled={Disabled} type={BtnType} onClick={btnFunc}>
      {children}
    </Btn>
  );
}
