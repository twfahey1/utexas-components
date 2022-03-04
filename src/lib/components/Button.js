import React from "react";
import "../styles/build/forty_acres.scss"; // Tell webpack that Button.js uses these styles

const Button = (props) => {
  if (typeof window === "object") {
    return (
      <button
        className={`btn btn--${props.kind} CTA background-burnt-orange color-white ${props.classes}`}
        data-id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={props.handleClick}
      >
        <h4>{props.label}</h4>
      </button>
    );
  }
};
export default Button;
