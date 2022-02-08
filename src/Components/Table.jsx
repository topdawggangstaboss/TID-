import React from "react";
import "../CSS/Table.css";

//Not sure how to do this - maybe we should have more components (for each row or something)

function Table() {
  return (
    <>
      <div className="table">
        <div className="headerbox">
          <div className="headertext">Hello</div>
        </div>
        <div className="headerbox">Hello</div>
        <div className="headerbox">Hello</div>
        <div className="textbox"></div>
      </div>
      <div className="table">
        <div className="textbox">
          {" "}
          <div className="boxtext">Hello</div>
        </div>
      </div>
    </>
  );
}

export default Table;
