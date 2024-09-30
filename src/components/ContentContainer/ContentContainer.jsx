import React from "react";
import "./ContentContainer.css";

export default function ContentContainer({ children, classes, id, style }) {
  // custom container for each section of the portfolio website
  return (
    <div
      className={`content-container ${classes ? classes : ""}`}
      style={style ? style : null}
      id={id}
    >
      {children}
    </div>
  );
}
