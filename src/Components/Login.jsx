import { useState } from "react";
import apiClient from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./login.css";
import SubHeader from "./SubHeader";
import Footer from "./Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = isRegistering
        ? await apiClient.post("/auth/register", { email, password, firstName, lastName })
        : await apiClient.post("/auth/login", { email, password });

      login(response.data.user, response.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SubHeader />

      <div className="loginPageBody">
        <div className="loginCard">
          <div className="userNameAndPassword">
            <h3 className="loginTitle">Member Login</h3>

            <form onSubmit={handleSubmit} className="login-form">

              {isRegistering && (
                <>
                  <div className="sideOne">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="sideTwo">
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last name"
                      required
                    />
                  </div>
                </>
              )}

              <div className="sideOne">
                <input
                  className="emailBox"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="sideTwo">
                <input
                  className="passwordBox"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  required
                />
              </div>
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </span>

              {error && <p className="errorMessage">{error}</p>}

              <button type="submit" disabled={loading} className="submitButton">
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <p className="signInQuestion">
                New member?{" "}
                <span onClick={() => setIsRegistering(!isRegistering)}>
                  {isRegistering ? "Back to login" : "Create account"}
                </span>
              </p>
            </form>
          </div>

          <div className="guestAccess">
            <h5>GUEST ACCESS</h5>
            <h3>
              Browse and place orders without an account. Member perks not
              included.
            </h3>
            <p>
              <span>*</span> 25% member discount
            </p>
            <p>
              <span>*</span> Order history & tracking
            </p>
            <p>
              <span>*</span> Priority white glove service
            </p>
            <p>
              <span>*</span> Exclusive member pricing
            </p>
            <button
              onClick={() => navigate("/products")}
              className="guestButton"
            >
              Continue as guest
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/")}>Back to site</button>
      <Footer />
    </>
  );
}