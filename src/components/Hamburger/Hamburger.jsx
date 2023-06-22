import React, { useState } from "react";
import "./Hamburger.css";

export default function Hamburger({ children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((prevState) => !prevState)}>Burger</button>

      <div className={`hamburger ${isOpen ? "open" : ""}`}>
        <button
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            margin: "1rem",
          }}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          Burger
        </button>
        {children}
      </div>
    </>
  );
}
