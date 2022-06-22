import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../../redux/store/store";
type ProtectedRouteProps = {
  children: ReactElement;
};
const ProtectedRoute = (props: ProtectedRouteProps): ReactElement => {
  const user = useSelector((state: RootState) => state.user.userData);

  if (Object.keys(user).length === 0) {
    return <Navigate to="/auth/login" replace />;
  }

  return props.children;
};

export default ProtectedRoute;
