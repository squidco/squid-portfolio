import React from "react";
import logoSVG from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to="/">
      <img src={logoSVG} className="logo" />
    </NavLink>
  );
}
