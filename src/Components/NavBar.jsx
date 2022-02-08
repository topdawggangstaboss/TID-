import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css";
import * as FaIcons from "react-icons/fa";

function NavBar() {
  return (
    <div className="sidenav">
      <div className="sidenav-title">AsoPlan</div>
      <div className="sidenav-sub">Excursion</div>
      <div className="sidenav-sub">Cars</div>
      <div className="sidenav-sub">Sho</div>
    </div>
  );
}

export default NavBar;
