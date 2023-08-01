import React from "react";
import NavControls from "../NavControls/NavControls";
import Logo from "../Logo";
import "./Nav.css";

export default function Nav() {
  // renders the nav bar and nav controls component within it
  return (
    <div className="nav">
      <Logo />

      <NavControls />
    </div>
  );
}
