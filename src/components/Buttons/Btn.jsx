import React from "react";
import { useHistory } from 'react-router-dom';

const Btn = () => {
  const history = useHistory();
  
  const handleUsers = () => {
    console.log("rediction");
    history.replace("/users");
  };

  return (
    <div onClick={handleUsers}>
      <li>Voir la liste des utilisateurs</li>
    </div>
  );
};

export default Btn;
