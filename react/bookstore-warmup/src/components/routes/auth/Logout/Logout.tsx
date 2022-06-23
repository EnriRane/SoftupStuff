import { useEffect } from "react";
import { removeFromStorage } from "../../../../services/authService";

const Logout = () => {
  useEffect(() => {
    removeFromStorage();
    window.location.href = "/auth/login";
  });
  return null;
};

export default Logout;
