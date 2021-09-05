import React from "react";

const BtnLogout = ({ classes, content }) => {
  return <button className={`btn ${classes}`}>{content}</button>;
};

export default BtnLogout;
