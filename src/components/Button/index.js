import React from "react";
import { Btn } from "./style";

export function Button(props) {
  const { Disabled, BtnType, btnFunc, children, small } = props;
  return (
    <Btn small={small} disabled={Disabled} type={BtnType} onClick={btnFunc}>
      {children}
    </Btn>
  );
}
