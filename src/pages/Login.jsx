import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must contain at least 6 characters")
        .required("Password is required")
    }),

    onSubmit: async (values) => {
      setSuccess("");

      // Simulate login API request
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      console.log("Login:", values);

      setSuccess("Login successful!");

      // Redirect to Dashboard after login
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  });

  return (
    <section className="form-section">
      <div className="form-card">

        <div className="form-header">
          <span className="badge">
            Welcome to Login Page
          </span>

          <h3>Login</h3>

          <p>
            Login to access your dashboard.
          </p>
        </div>

        {success && (
          <div className="success-message">
            {success}
          </div>
        )}

        <form onSubmit={formik.handleSubmit}>

          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
            touched={formik.touched.password}
          />

          <Button
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting
              ? "Logging in..."
              : "Login"}
          </Button>

        </form>

      </div>
    </section>
  );
}

export default Login;