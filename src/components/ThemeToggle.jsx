import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function ThemeToggle({ toggle }) {
  const [icon, setIcon] = useState();
  useEffect(() => {
    setIcon(localStorage.getItem("theme") || "light");
  }, []);

  function toggleTheme() {
    toggle();
    if (icon === "dark") {
      setIcon("light");
    } else {
      setIcon("dark");
    }
  }

  return (
    <div style={{display: "inline"}}>
      <button type="button" onClick={toggleTheme}>
        <img
          src={
            icon === "dark" ? "assets/images/sun.svg" : "assets/images/moon.svg"
          }
          style={{ width: "1rem" }}
          alt={icon === "dark" ? "A small sun icon" : "A small moon icon"}
        />
      </button>
    </div>
  );
}

ThemeToggle.propTypes = {
  toggle: PropTypes.func,
};
