import React from "react";
import "./Button.css";

export function Button(props) {
  const { Disabled, BtnType, btnFunc, children } = props;
  return (
    <div>
      <button
        className="Btn-component"
        id={Disabled ? "Btn-Disabled" : undefined}
        disabled={Disabled}
        type={BtnType}
        onClick={btnFunc}
      >
        {children}
      </button>
    </div>
  );
}
