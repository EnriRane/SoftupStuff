import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Assets/Css/UserDetails.css";
import { getUser } from "../Services/userService";
import LoadingSpinner from "../Components/Spinner/Spinner";
const UserDetails = () => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const getUserDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      const currentUser = await getUser(id);
      setUser(currentUser);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [id]);
  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);
  if (error) {
    return (
      <h1 className="error">
        <i className="fa-solid fa-skull-crossbones"></i>&nbsp;&nbsp;
        {error}
      </h1>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="userDetails">
      <div className="image">
        <img src={user.avatar_url} alt="avatar" />
      </div>

      <div className="rightContainer">
        <div className="name">
          <h1>{user.name}</h1>
        </div>
        <div className="container">
          <form>
            <div className="row">
              <div className="col-25">
                <label>Location</label>
              </div>
              <div className="col-75">
                <p>{user.loaction ? user.loaction : "No location provided"}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Email</label>
              </div>
              <div className="col-75">
                <p>{user.email ? user.email : "No email provided"}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Company</label>
              </div>
              <div className="col-75">
                <select id="company" name="company">
                  <option value="Companies" hidden>
                    Companies
                  </option>
                  {user.company
                    ? user.company
                        .substring(1)
                        .split(", @")
                        .map((company) => (
                          <option key={company} value={company}>
                            {company}
                          </option>
                        ))
                    : "No company provided"}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Public repositories</label>
              </div>
              <div className="col-75">
                <p>
                  {user.public_repos
                    ? user.public_repos
                    : "No respositories provided"}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Followers</label>
              </div>
              <div className="col-75">
                <p>
                  {user.followers ? user.followers : "No followers provided"}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Time joined github</label>
              </div>
              <div className="col-75">
                <p>
                  {user.created_at
                    ? new Date(user.created_at.slice(0, -1)).toUTCString()
                    : "No time provided"}
                </p>
              </div>
            </div>
            <br />
            <div className="row">
              <Link className="button" to="/">
                Go back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
