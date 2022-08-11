import { useNavigate } from "react-router-dom";

import * as authService from "../../../Services/authService";

import styles from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      return;
    }

    authService
      .register(email, password)
      .then((data) => {
        if (data.accessToken === undefined) {
          throw new Error(`${data.code} : ${data.message}!`);
        }
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error", { state: { error } });
      });
  };

  return (
    <section className={styles["register-wrapper"]}>
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
              type="text"
              className="form-control"
              id="password"
              placeholder="********"
              name="password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>

            <input
              type="text"
              className="form-control"
              id="confirmPassword"
              placeholder="********"
              name="confirmPassword"
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

          <input type="submit" className="btn btn-primary" value="Sign up" />
        </div>
      </form>
    </section>
  );
};

export default Register;
