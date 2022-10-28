import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "auto",
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        height: "360px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
