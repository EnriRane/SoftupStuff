import { useEffect } from "react";
// import authService from "../services/authService";

const Logout = () => {
  useEffect(() => {
    // authService.logout();
    window.location.href = "/auth";
  });
  return null;
};

export default Logout;
