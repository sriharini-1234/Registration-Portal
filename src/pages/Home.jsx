// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <section className="hero">
//       <div className="hero-content">

//         <span className="badge">
//           React Registration Portal
//         </span>

//         <h1>
//           Create your account
//           <span> with confidence.</span>
//         </h1>

//         <p>
//           A modern responsive registration portal built
//           using React, Formik, Yup validation and REST API
//           integration.
//         </p>

//         <div className="hero-buttons">
//           <Link to="/register" className="primary-button">
//             Create Account
//           </Link>

//           <Link to="/users" className="secondary-button">
//             View Users
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Home;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const users =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const user = users.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      setError(
        "Account not found. Please create an account first."
      );
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password. Please try again.");
      return;
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    navigate("/dashboard");
  };

  return (
    <main className="home-login-page">

      <div className="home-login-card">

        <div className="home-login-header">

          <span className="badge">
            Welcome to the Registration Portal
          </span>

          <h2>Login</h2>

          <p>
            Login to access your registration dashboard.
          </p>

        </div>


        <form
          className="home-login-form"
          onSubmit={handleLogin}
        >

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

          </div>


          {error && (
            <div className="home-login-error">
              {error}
            </div>
          )}


          <button
            type="submit"
            className="home-login-button"
          >
            Login
          </button>

        </form>


        <div className="create-account-section">

          <p>
            Don't have an account?
          </p>

          <Link to="/register">
            Create an Account
          </Link>

        </div>

      </div>

    </main>
  );
}

export default Home;