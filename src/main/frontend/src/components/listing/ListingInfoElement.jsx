import React from "react";

function ListingInfoElement(props) {
  return (
    <div
      className="border col"
      style={{ marginBottom: "10px", padding: "10px" }}
    >
      <h5>{props.header}</h5>
      <span>{props.body}</span>
    </div>
  );
}

export default ListingInfoElement;
