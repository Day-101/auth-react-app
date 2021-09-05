import React from "react";
import SignUpForm from "../components/Log/SignUpForm";
import BtnBack from "components/Buttons/BtnBack";

const Register = () => {
  return (
    <div className="container register">
      <BtnBack
        classes="btn-outline btn-back"
        url="/"
        content="Retour à l'acceuil"
      />
      <div className="content">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Register;
