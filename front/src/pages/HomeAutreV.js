import AutreV from "../components/AutreV";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";

export default function HomeAutreV() {
  const navigate = useNavigate();
  const [AUTRE, setAUTRE] = useState([]);

  useEffect(() => {
    const getAutreV = async () => {
      try {
        await axios.get("http://localhost:5000/autres").then((res) => {
          setAUTRE(res.data.AUTRE);
          console.log(res);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getAutreV();
  }, [AUTRE]);

  return (
    <div>
      <Navbar />
      <div className="home_page">
        <div className="articles">
          <button onClick={() => navigate("/")}>Voiture occasion</button>
          <button onClick={() => navigate("/homeMotos")}>Motos </button>
          <button onClick={() => navigate("/homeAutreV")}>
            Autre véhicule
          </button>
          <img
            src="https://i.pinimg.com/originals/14/14/ee/1414ee5e43bce3ab840aa02bd20b3974.gif"
            alt=""
          />
          <img
            src="https://cdn.dribbble.com/users/431269/screenshots/2618770/gif-car-geof.gif"
            alt=""
          />
          <button onClick={() => navigate("/create")}>
            Créer une annance{" "}
          </button>
        </div>

        <div className="posts">
          {!AUTRE.length ? (
            <img src="../Loading.gif" alt="" />
          ) : (
            AUTRE.map((el) => <AutreV autre={el} />)
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
