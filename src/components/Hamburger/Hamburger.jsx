import React, { useState } from "react";
import "./Hamburger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Hamburger({ children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((prevState) => !prevState)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

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
          <FontAwesomeIcon icon={faX} />
        </button>
        {children}
      </div>
    </>
  );
}
