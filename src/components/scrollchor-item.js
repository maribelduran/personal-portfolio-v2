import React, { useRef } from "react";
import Scrollchor from "react-scrollchor";

const ScrollchorItem = ({ to, children, className }) => {
  let itemRef = useRef();
  return (
    <span
      onClick={(event) => itemRef.current.simulateClick(event)}
      className={className}
    >
      <Scrollchor to={to} ref={itemRef} animate={{ duration: 500 }} />
      {children}
    </span>
  );
};

export default ScrollchorItem;
