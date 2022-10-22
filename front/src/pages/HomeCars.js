import Cars from "../components/Cars";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function HomeCars() {
  const navigate = useNavigate();

  const [CARS, setCARS] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        await axios.get("http://localhost:5000/cars").then((res) => {
          setCARS(res.data.CARS);
          console.log(res);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getCars();
  }, [CARS]);

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
          {!CARS.length ? (
            <img src="../Loading.gif" alt="" />
          ) : (
            CARS.map((el) => <Cars car={el} />)
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
