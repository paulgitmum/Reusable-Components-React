import React, { useState } from "react";

function Button(props) {
 
  return (
    <div>
      <button
        style={{
          color: props.color,
          height: props.height,
          width: props.width,
          fontSize: props.size,
          borderRadius: props.borderRadius,
          border: props.border,
        }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
