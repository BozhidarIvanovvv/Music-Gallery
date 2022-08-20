import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import * as authService from "../../../Services/authService";
import { AuthContext } from "../../../Contexts/AuthContext";

import styles from "./ValidatedLoginForm.module.css";

const ValidatedLoginForm = () => {
  const { userLoginHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(6, "Email must be atleast 6 characters long!")
        .email("Invalid email address!")
        .required("Email is required!"),
      password: Yup.string()
        .min(5, "Password must be atleast 5 characters long!")
        .max(30, "Password must be 30 characters or less!")
        .required("Password is required!"),
    }),
    onSubmit: (values) => {
      authService
        .login(values.email, values.password)
        .then((data) => {
          if (data.accessToken === undefined) {
            throw new Error(`${data.code} : ${data.message}!`);
          }
          userLoginHandler(data);
          navigate("/");
        })
        .catch((error) => {
          navigate("/error", { state: { error } });
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="modal-body">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            id="email"
            placeholder="example@mail.com"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={styles.errorTag}>{formik.errors.email}</p>
          ) : (
            <></>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="login-password"
            name="password"
            placeholder="********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={styles.errorTag}>{formik.errors.password}</p>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="modal-footer">
        <Link to={"/"} type="button" className="btn btn-default">
          Close
        </Link>

        <input type="submit" className="btn btn-primary" value="Sign in" />
      </div>
    </form>
  );
};

export default ValidatedLoginForm;
