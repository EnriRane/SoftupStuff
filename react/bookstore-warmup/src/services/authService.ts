export const saveJwtToStorage = (jwt: string) => {
  localStorage.setItem("token", jwt);
};
export const removeJwtFromStorage = (jwt: string) => {
  localStorage.removeItem("token");
};
