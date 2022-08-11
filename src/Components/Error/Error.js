import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./Error.module.css";

const Error = () => {
  const location = useLocation();
  const errorString = location.state.error.message;

  return (
    <div id={styles["notfound"]}>
      <div className={styles["notfound"]}>
        <div className={styles["notfound-404"]}>
          <h1>Oops!</h1>
        </div>
        <h2>Status code: {errorString.slice(0, 3)}</h2>
        <p>{errorString.slice(5, errorString.length - 1)}!</p>
        <Link to="/">Go To Homepage</Link>
      </div>
    </div>
  );
};

export default Error;
