import React from "react";
import { useHistory } from "react-router-dom";

const Btn = ({ classes, url, content }) => {
  const history = useHistory();

  const handleClick = () => {
    if (url === null) {
    } else {
      history.replace(url);
    }
  };

  return (
    <button className={`btn ${classes}`} onClick={handleClick}>
      {content}
    </button>
  );
};

export default Btn;
