import React from "react";
import SignInForm from "../components/Log/SignInForm";
import BtnBack from "components/Buttons/BtnBack";

const Login = () => {
  return (
    <div className="container login">
      <BtnBack
        classes="btn-outline btn-back"
        url="/"
        content="Retour à l'acceuil"
      />
      <div className="content">
        <SignInForm />
      </div>
    </div>
  );
};

export default Login;
