import styles from "./Register.module.css";

const Register = () => {
  return (
    <section className={styles["register-wrapper"]}>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@mail.com"
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

          <div className="form-group">
            <label htmlFor="repeatPassword">Repeat Password</label>

            <input
              type="text"
              className="form-control"
              id="repeatPassword"
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
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
