import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import BtnLogout from "../Buttons/BtnLogout";

const Logout = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    window.location = "/";
  };

  return (
    <header>
      <div className="container-logout" onClick={logout}>
        <BtnLogout classes="btn-outline" content="Se déconnecter" />
      </div>
    </header>
  );
};

export default Logout;
