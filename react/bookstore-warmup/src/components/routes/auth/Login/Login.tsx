import React from "react";
import Translator from "../../../common/Translator/Translator";
import LoginForm from "../../../specificComponents/LoginForm/LoginForm";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <div data-testid="login">
      <Translator data-testid="translator" />
      <LoginForm />
    </div>
  );
};

export default Login;
