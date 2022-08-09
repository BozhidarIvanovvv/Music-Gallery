import styles from "./Login.module.css";

const Login = () => {
  return (
    <section className={styles["login-wrapper"]}>
      <form>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="username123"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
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
          {/* <!-- link to payment gatway here --> */}
          <button type="button" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
