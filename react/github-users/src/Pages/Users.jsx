import React, { useEffect, useState, useCallback } from "react";
import User from "../Components/User/User";
import Spinner from "../Components/Spinner/Spinner";
import "../Assets/Css/Users.css";
import { useDispatch } from "react-redux";
import { getUsers } from "../Services/userService";
import { useSelector } from "react-redux";
import { getAllUsers } from "../redux/reducers/userReducer";
import { getFinalId } from "../utils/getLastIdInArray";
import { useLocation } from "react-router-dom";

const Users = () => {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  const lastId = useSelector((state) => state.users.lastId);
  const users = useSelector((state) => getAllUsers(state));
  const getAndDispatchUsers = async () => {
    setIsPending(true);
    try {
      const users = await getUsers(lastId);
      dispatch({ type: "addAllUsers", payload: users });
      const finalId = getFinalId(users);
      dispatch({ type: "changeLastId", payload: finalId });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };
  const getSomeUsers = useCallback(async () => {
    console.log(location);
    await getAndDispatchUsers();
  }, [dispatch]);
  useEffect(() => {
    getSomeUsers();
  }, [getSomeUsers]);
  const handleLoadMoreUsers = async () => {
    await getAndDispatchUsers();
  };
  if (error) {
    return (
      <h1 className="error">
        <i className="fa-solid fa-skull-crossbones"></i>&nbsp;&nbsp;
        {error}
      </h1>
    );
  }
  return (
    <div className="users">
      {isPending ? (
        <Spinner />
      ) : (
        <div>
          <ul className="usersList">
            {users.map((user) => (
              <User key={user.id || Math.random(50)} user={user} />
            ))}
          </ul>
          <div>
            <button onClick={handleLoadMoreUsers} className="load">
              Load more...
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
