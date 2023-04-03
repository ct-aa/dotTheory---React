import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link exact to="/">
          Home
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/what-is-new-in-react">What's New in React</Link>
        </li>
        <li>
          <Link to="data-fetching-in-react">Data Fetching in React</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
