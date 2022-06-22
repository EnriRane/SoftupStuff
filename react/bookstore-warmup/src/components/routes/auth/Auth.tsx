import { Outlet } from "react-router-dom";
import "./Auth.scss";

const Auth: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Auth;
