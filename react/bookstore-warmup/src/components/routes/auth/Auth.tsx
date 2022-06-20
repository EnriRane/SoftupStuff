import { Outlet } from "react-router-dom";
import "./Auth.scss";
interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Auth;
