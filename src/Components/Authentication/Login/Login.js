import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import styles from "./Login.module.css";
import * as authService from "../../../Services/authService";
import { AuthContext } from "../../../Contexts/authContext";

const Login = () => {
  const { userLoginHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    authService
      .login(email, password)
      .then((data) => {
        userLoginHandler(data);
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  return (
    <section className={styles["login-wrapper"]}>
      <form onSubmit={onSubmit}>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@mail.com"
              name="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="login-password"
              name="password"
              placeholder="********"
            />
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
          >
            Close
          </button>

          <input type="submit" className="btn btn-primary" value="Sign in" />
        </div>
      </form>
    </section>
  );
};

export default Login;
