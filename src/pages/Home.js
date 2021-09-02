import React, { useContext } from 'react';
import { UidContext } from '../components/Contexts/AppContext';

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div>
      <h1>Home</h1>
      {uid ?(
        <h1>Voir les users</h1>
        ) : (
        <h1>Bienvenue !</h1>
      )}
    </div>
  );
};

export default Home;
