import styles from "./Register.module.css";

import ValidatedRegisterForm from "./ValidatedRegisterForm";

const Register = () => {
  return (
    <section className={styles["register-wrapper"]}>
      <ValidatedRegisterForm />
    </section>
  );
};

export default Register;
