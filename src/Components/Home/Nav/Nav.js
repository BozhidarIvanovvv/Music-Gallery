import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../Contexts/AuthContext";

import styles from "./Nav.module.css";

const Nav = ({ cartItemsCount, funds }) => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-fixed-top navbar-default">
      <div className="container">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          {/* <!-- logo area --> */}
          <Link className={styles["navbar-brand"]} to="/">
            {/* <!-- logo image --> */}
            Music Gallery
          </Link>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul
            className={`nav navbar-nav navbar-right ${styles["navbar-styles"]}`}
          >
            {user.accessToken ? (
              <>
                <li>
                  <span className={styles.span}>Hello, {user.email}!</span>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/featuredAlbums">Featured Albums</Link>
                </li>

                <Link
                  className={`${styles["funds-link"]} ${styles.link}`}
                  to="/addFunds"
                >
                  Add Funds
                </Link>
                <span className={styles["funds"]}>
                  Your Funds: {funds.fundsState}$
                </span>

                <li>
                  <Link to="/logout">Logout</Link>
                </li>

                <div className={styles.cart}>
                  <span className={styles["cart-first"]}>
                    <Link className={styles.link} to="/cart">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                  </span>
                  <span className={styles["cart-second"]}>
                    {cartItemsCount}
                  </span>
                </div>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
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
