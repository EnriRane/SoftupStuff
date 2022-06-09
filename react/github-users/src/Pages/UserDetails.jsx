import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../Assets/Css/UserDetails.css";
import { getUser } from "../Services/userService";
import LoadingSpinner from "../Components/Spinner/Spinner";
const UserDetails = () => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

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
        <div class="container">
          <form>
            <div class="row">
              <div class="col-25">
                <label for="fname">Location</label>
              </div>
              <div class="col-75">
                <p>{user.loaction ? user.loaction : "No location provided"}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="lname">Email</label>
              </div>
              <div class="col-75">
                <p>{user.email ? user.email : "No email provided"}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="country">Company</label>
              </div>
              <div class="col-75">
                <select id="company" name="company">
                  <option value="Companies" hidden>
                    Companies
                  </option>
                  {user.company
                    ? user.company
                        .substring(1)
                        .split(", @")
                        .map((company) => (
                          <option value={company}>{company}</option>
                        ))
                    : "No company provided"}
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="subject">Subject</label>
              </div>
              <div class="col-75">
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                ></textarea>
              </div>
            </div>
            <br />
            <div class="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
