import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UidContext } from '../components/Contexts/AppContext';
import Logout from '../components/Log/Logout';

const Home = () => {
  const uid = useContext(UidContext);
  const history = useHistory();

  useEffect(() => {

  }, [uid]);

  const redirectToLogin = () => {
    history.replace("/login");
  };
  console.log(uid);
  return (
    <div>
      <div>
      </div>
      {uid ? (
        <>
          <Logout />
        </>
        ) : (
        <>
          <h1>Bienvenue !</h1>
          <p>Vous êtes sur une application test d'authentification qui a été réalisé avec NodeJS et ReactJS.</p>
          <p>Day SY</p>
          <li onClick={redirectToLogin}>Se connecter</li>
        </>
      )}
    </div>
  );
};

export default Home;
