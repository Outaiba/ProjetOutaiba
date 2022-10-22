import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleRegister = async () => {
    try {
      await axios
        .post("http://localhost:5000/user/register", user)
        .then((res) => {
          toast.success(`welcom ${res.data.name}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(res);
          localStorage.setItem("token", JSON.stringify(res.data.token));
          navigate("/create");
        });
    } catch (error) {
      console.log(error);
      if (error.response) {
        toast.error(error.response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div class="login-page">
        <div class="form">
          <form class="register-form">
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="email address"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input
              type="password"
              placeholder="confirme password"
              onChange={(e) =>
                setUser({ ...user, confirm_password: e.target.value })
              }
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              create
            </button>
            <p class="message">
              Already registered?
              <a href="#" onClick={() => navigate("/SignIn")}>
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
