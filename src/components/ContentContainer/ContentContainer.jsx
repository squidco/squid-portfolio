import React from "react";
import "./ContentContainer.css";

export default function ContentContainer({ children, className, id }) {
  return (
    <div className={`content-container ${className ? className : ""}`} id={id}>
      {children}
    </div>
  );
}
