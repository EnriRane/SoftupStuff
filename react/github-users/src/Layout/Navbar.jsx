import "../Assets/Css/Navbar.css";
import gitHubIcon from "../Assets/images/githubIcon.png";
const Navbar = () => {
  return (
    <header className="title">
      <div>
        <img src={gitHubIcon} alt="Github Logo" />
      </div>
      <div>
        <h1>Github Users </h1>
      </div>
    </header>
  );
};

export default Navbar;
