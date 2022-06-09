import { Link } from "react-router-dom";
import "./User.css";

const User = ({ user }) => {
  return (
    <div className="user">
      <div>
        <a
          className="repository"
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <img src={user.avatar_url} alt="" />
        </a>
      </div>
      <div className="bottomPart">
        <div>
          <h1>{user.login}</h1>
        </div>
        <div>
          <Link className="details" to={`/userDetails/${user.login}`}>
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
