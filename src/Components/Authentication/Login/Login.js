import styles from "./Login.module.css";

import ValidatedLoginForm from "./ValidatedLoginForm";

const Login = () => {
  return (
    <section className={styles["login-wrapper"]}>
      <ValidatedLoginForm />
    </section>
  );
};

export default Login;
