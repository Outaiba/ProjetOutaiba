import React from "react";
import Navbar from "../components/Navbar";
import CreateCar from "../components/CreateCar";
import Footer from "../components/Footer";
import CreateMoto from "../components/CreateMoto";
import CreateAutre from "../components/CreateAutre";

export default function Create() {
  return (
    <div>
      <Navbar />
      <CreateCar />
      <CreateMoto />
      <CreateAutre />

      <Footer />
    </div>
  );
}
