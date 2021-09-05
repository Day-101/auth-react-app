import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BtnBack = ({ classes, url, content }) => {
  const history = useHistory();

  const handleClick = () => {
    history.replace(url);
  };

  return (
    <button className={`btn ${classes}`} onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowLeft} />
      {" "}
      {content}
    </button>
  );
};

export default BtnBack;
