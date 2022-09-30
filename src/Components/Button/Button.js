import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="button">
      <button
        className={`${"button_input"} ${props.color}`}
        onClick={() => props.onclick(props.input)}
      >
        {props.input}
      </button>
    </div>
  );
};

export default Button;
