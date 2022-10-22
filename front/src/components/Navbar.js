import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <div className="Nav-logo">
        <img
          src="https://i.pinimg.com/originals/cf/6b/21/cf6b2151656ebc433a2c8afa2aa94a9c.jpg"
          alt="logo voiture occasion"
          onClick={() => {
            {
              navigate("/");
            }
          }}
        />
      </div>
      <div className="Nav-button">
        <button
          onClick={() => {
            {
              navigate("/signIn");
            }

            toast.error("connectez vous", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }}
        >
          Ajouter une annanace
        </button>

        <button
          onClick={() => {
            {
              navigate("/signIn");
            }
          }}
        >
          Se connecter
        </button>
      </div>
    </div>
  );
}
