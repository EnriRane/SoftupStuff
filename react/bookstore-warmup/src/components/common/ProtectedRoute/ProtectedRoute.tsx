import { ReactElement } from "react";

import { Navigate } from "react-router-dom";

import { getUser } from "../../../services/authService";
type ProtectedRouteProps = {
  children: ReactElement;
};
const ProtectedRoute = (props: ProtectedRouteProps): ReactElement => {
  if (Object.keys(getUser()).length < 1) {
    return <Navigate to="/auth/login" replace />;
  }

  return props.children;
};

export default ProtectedRoute;
