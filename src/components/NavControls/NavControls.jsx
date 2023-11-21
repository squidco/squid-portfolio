import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";

export default function NavControls({ children }) {
  // renders the nav controls by checking the screen's size
  // if it is greater than 480px it returns several buttons on the nav bar
  // if it is smaller than 480px it returns a hamburger menu which slides out from the side of the screen
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { width } = useWindowDimensions();

  if (width > 480) {
    return <div>{children}</div>;
  } else {
    return <Hamburger>{children}</Hamburger>;
  }
}

NavControls.propTypes = {
  children: PropTypes.any,
};
