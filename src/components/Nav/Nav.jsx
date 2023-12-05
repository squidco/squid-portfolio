import PropTypes from "prop-types";
import Logo from "../Logo";
import "./Nav.css";

export default function Nav({ children }) {
  // renders the nav bar and nav controls component within it
  return (
    <div className="nav">
      <Logo />
      {children}
    </div>
  );
}

Nav.propTypes = {
  children: PropTypes.any,
};
