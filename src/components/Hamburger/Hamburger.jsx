import React, { useState } from "react";
import "./Hamburger.css";

export default function Hamburger({ children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((prevState) => !prevState)}>Burger</button>
      {isOpen && (
        <div className="hamburger">
          <button onClick={() => setOpen((prevState) => !prevState)}>
            Burger
          </button>
          {children}
        </div>
      )}
    </>
  );
}
