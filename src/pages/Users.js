import React, { useEffect, useState } from "react";
import UsersAPI from "../services/usersAPI";
import BtnBack from "components/Buttons/BtnBack";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await UsersAPI.findAllUsers();
    setUsers(users);
    setIsLoading(false);
  };

  return (
    <div className="container users">
      <BtnBack
        classes="btn-outline btn-back"
        url="/"
        content="Retour à l'acceuil"
      />
      <h1>Tous les utilisateurs</h1>
      <p>
        Vous trouverez ci-dessous, la liste de tous les comptes créés sur cette
        application.
      </p>
      <ul>
        <div className="column-titles">
          <div>ID</div>
          <div>Email</div>
          <div>Créé le</div>
        </div>
        {isLoading ? (
          <h1>Chargement en cours</h1>
        ) : (
          users.data.map((user) => (
            <li key={user._id}>
              <div className="user-id">
                <span>ID : </span>
                {user._id}
              </div>
              <div className="user-email">{user.email}</div>
              <div className="user-date">
                <span>Créé le </span>
                {new Date(user.createdAt).toLocaleDateString("fr")}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Users;
