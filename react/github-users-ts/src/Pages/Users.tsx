import React, { useEffect, useState, useCallback } from "react";
import User from "../Components/User/User";
import Spinner from "../Components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { getUsers } from "../Services/userService";
import { useSelector } from "react-redux";
import { getAllUsers } from "../redux/reducers/userReducer";
import { getFinalId } from "../utils/getLastIdInArray";
import { useLocation } from "react-router-dom";
import "../Assets/Css/Users.css";
import { IRootState } from "../Models/IRootState";

let firstTimeRender = true;

const Users: React.FC = () => {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  const lastId = useSelector((state: IRootState) => state.users.lastId);
  const users = useSelector((state: IRootState) => getAllUsers(state));

  const getAndDispatchUsers = async () => {
    setIsPending(true);
    try {
      const users = await getUsers(lastId);
      dispatch({ type: "addAllUsers", payload: users });
      const finalId = getFinalId(users);
      dispatch({ type: "changeLastId", payload: finalId });
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };
  const getSomeUsers = useCallback(async () => {
    await getAndDispatchUsers();
  }, [dispatch, location.state]);

  useEffect(() => {
    if (firstTimeRender) {
      getSomeUsers();
    }
    firstTimeRender = false;
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
      {isPending ? <Spinner /> : null}

      <div>
        <ul className="usersList">
          {users.map((user) => (
            <User key={user.id || Math.random()} user={user} />
          ))}
        </ul>
        {isPending ? null : (
          <button id="load" onClick={handleLoadMoreUsers} className="load">
            Load more...
          </button>
        )}
      </div>
    </div>
  );
};

export default Users;
