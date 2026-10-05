import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import InputField from "../components/InputField";
import Button from "../components/Button";
import { createUser } from "../services/api";

function Register() {
  const [success, setSuccess] = useState("");
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must contain at least 3 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),

    phone: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "Phone number must contain 10 digits"
      )
      .required("Phone number is required"),

    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
        "Password must include at least one uppercase letter, one lowercase letter, and one special character"
      )
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        "Passwords must match"
      )
      .required("Please confirm your password")
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    },

    validationSchema,

    onSubmit: async (values, { resetForm }) => {
      setSuccess("");
      setApiError("");

      try {
        const userData = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
          createdAt: new Date().toISOString()
        };

        const response = await createUser(userData);

        const existingUsers = JSON.parse(
          localStorage.getItem("registeredUsers") || "[]"
        );

        const savedUser = {
          ...userData,
          id: response?.id || Date.now(),
          createdAt: response?.createdAt || userData.createdAt
        };

        const updatedUsers = [...existingUsers, savedUser];

        localStorage.setItem(
          "registeredUsers",
          JSON.stringify(updatedUsers)
        );

        window.dispatchEvent(
          new CustomEvent("registered-users-updated", {
            detail: updatedUsers
          })
        );

        console.log("API Response:", response);

        setSuccess(
          "Registration successful! Your account has been created."
        );

        resetForm();

        setTimeout(() => {
          navigate("/dashboard");
        }, 700);
      } catch (error) {
        console.error(error);

        setApiError(
          "Registration failed. Please try again."
        );
      }
    }
  });

  return (
    <section className="form-section">

      <div className="form-card">

        <div className="form-header">

          <span className="badge">
            Create Account
          </span>

          <h2>Register</h2>

          <p>
            Enter your details to create an account.
          </p>

        </div>

        {success && (
          <div className="success-message">
            {success}
          </div>
        )}

        {apiError && (
          <div className="error-message">
            {apiError}
          </div>
        )}

        <form onSubmit={formik.handleSubmit}>

          <InputField
            label="Full Name"
            name="name"
            placeholder="Enter your full name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.name}
            touched={formik.touched.name}
          />

          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />

          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Enter 10 digit phone number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.phone}
            touched={formik.touched.phone}
          />

          <div className="password-field">
            <InputField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.password}
              touched={formik.touched.password}
            />
            <button
              type="button"
              className="password-toggle inside-field"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="password-field">
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
            />
            <button
              type="button"
              className="password-toggle inside-field"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          <Button
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting
              ? "Creating Account..."
              : "Create Account"}
          </Button>

        </form>

      </div>

    </section>
  );
}

export default Register;