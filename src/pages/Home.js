import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UidContext } from "../components/Contexts/AppContext";
import Logout from "../components/Log/Logout";
import Btn from "../components/Buttons/Btn";
// import BtnToggle from "./components/Buttons/BtnToggle";

const Home = () => {
  const uid = useContext(UidContext);
  const history = useHistory();

  const redirectToLogin = () => {
    history.replace("/login");
  };

  return (
    <div className="container welcome">
      {/* <BtnToggle /> */}
      {uid ? (
        <>
          <Logout />
          <Btn />
        </>
      ) : (
        <>
          <h1>Bienvenue !</h1>
          <p>
            Vous êtes sur une application test d'authentification qui a été
            réalisé avec NodeJS et ReactJS.
          </p>
          <h2 className="txt-center">
            Connectez vous pour accéder à la liste des utilisateurs !
          </h2>
          <button className="btn btn-success" onClick={redirectToLogin}>Se connecter</button>
          <button className="btn btn-outline" onClick={redirectToLogin}>Créer un compte</button>
        </>
      )}
    </div>
  );
};

export default Home;
