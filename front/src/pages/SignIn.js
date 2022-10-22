import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:5000/user/login", user).then((res) => {
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
          <form class="login-form">
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
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              login
            </button>
            <p class="message">
              Not registered?
              <a
                href=""
                onClick={() => {
                  {
                    navigate("/signUp");
                  }
                }}
              >
                Create an account
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
