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
    <button type="button" onClick={toggleTheme}>
      <img
        src={
          icon === "dark" ? "assets/images/sun.svg" : "assets/images/moon.svg"
        }
        style={{ width: "1.5rem", display: "block" }}
        alt={icon === "dark" ? "A small sun icon" : "A small moon icon"}
      />
    </button>
  );
}

ThemeToggle.propTypes = {
  toggle: PropTypes.func,
};
