import React from "react";
import Translator from "../common/Translator/Translator";
import LoginForm from "../common/LoginForm/LoginForm";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <div>
      <Translator />
      <LoginForm />
    </div>
  );
};

export default Login;
