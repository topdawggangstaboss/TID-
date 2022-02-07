import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Sidebar() {
  return (
    <div className="sidenav">
      <div className="sidenav-title">AsoPlan</div>
      <div className="sidenav-sub">Excursion</div>
      <div className="sidenav-sub">Cars</div>
      <div className="sidenav-sub">Sho</div>
    </div>
  );
}

export default Sidebar;
