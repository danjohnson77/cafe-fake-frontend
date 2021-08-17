import React from "react";

const Border = ({ customClass }) => {
  return <div className={`border ${customClass ? customClass : ""}`}></div>;
};

export default Border;
