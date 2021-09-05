import React, { useContext } from "react";
import { UidContext } from "../components/Contexts/AppContext";
import Btn from "../components/Buttons/Btn";
// import BtnToggle from "./components/Buttons/BtnToggle";

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="container welcome">
      {/* <BtnToggle /> */}
      {uid ? (
        <>
          <Btn classes="btn-success" url="/users" content="Voir la liste des utilisateurs" />
          {/* <button className="btn btn-success" onClick={redirectToLogin}>Se connecter</button> */}
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
          <Btn classes="btn-success" url="/login" content="Se connecter" />
          <Btn classes="btn-outline" url="/register" content="Créer un compte" />
        </>
      )}
    </div>
  );
};

export default Home;
