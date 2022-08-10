import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Contexts/authContext";

const Nav = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-fixed-top navbar-default">
      <div className="container">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* <!-- logo area --> */}
          <a className="navbar-brand" href="#home">
            {/* <!-- logo image --> */}
            <img className="img-responsive" src="img/logo/logo.png" alt="" />
          </a>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {user.accessToken ? (
              <>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="#portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="#events">Events</Link>
                </li>
                <li>
                  <Link to="#team">Team</Link>
                </li>
                <li>
                  <Link to="#contact">Contact</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {/* <!-- /.navbar-collapse --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </nav>
  );
};

export default Nav;
