import { useState } from "react";
import PropTypes from "prop-types";
import "./Hamburger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Hamburger({ children }) {
  // renders a button on the nav bar and a menu off screen that when the button is pressed
  // slides in from the right side
  // slide in is done with css
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        className="menu-button"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <FontAwesomeIcon style={{ height: "2rem" }} icon={faBars} />
      </button>

      <div
        onClick={() => setOpen((prevState) => !prevState)}
        className={`hamburger ${isOpen ? "open" : ""}`}
      >
        <button
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            margin: "2rem",
          }}
        >
          <FontAwesomeIcon style={{ height: "2rem" }} icon={faX} />
        </button>

        {children}
      </div>
    </>
  );
}

Hamburger.propTypes = {
  children: PropTypes.any,
};
