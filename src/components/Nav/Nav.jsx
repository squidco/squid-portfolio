import React from "react";
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import NavControls from "../NavControls/NavControls";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <p>AP</p>

      <NavControls />
    </div>
  );
}
