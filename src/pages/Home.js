import React, { useContext } from "react";
import { UidContext } from "../components/Contexts/AppContext";
import Btn from "../components/Buttons/Btn";

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="container welcome">
      {uid ? (
        <>
          <h1>Vous êtes connecté !</h1>
          <p>
            Vous pouvez consulter la liste de tous les utilisateurs qui ont créé
            un compte sur cette application.
          </p>
          <Btn
            classes="btn-success"
            url="/users"
            content="Voir la liste des utilisateurs"
          />
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
          <Btn
            classes="btn-outline"
            url="/register"
            content="Créer un compte"
          />
        </>
      )}
    </div>
  );
};

export default Home;
