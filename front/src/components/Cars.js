import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Detail from "../pages/Detail";
import { Link } from "react-router-dom";

export default function Cars({ car }) {
  const [refetch, setRefetch] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios
        .delete(`http://localhost:5000/cars/${car._id}`, car)
        .then((res) => {
          toast.success("Annance deleted", {
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
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(car);
  return (
    <div className="XX">
      <Link
        to={`/detail/${car._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="post">
          <img
            src={car.image1}
            alt=""
            onClick={(e) => {
              e.preventDefault();
              <Detail car={car} />;
              refetch(true);
            }}
          />

          <div className="des">
            <h2>{car.prix} </h2>
            <div className="title">
              <h1>{car.marque} </h1>
              <h1>{car.model} </h1>
            </div>
          </div>
        </div>
      </Link>

      <div className="butt">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDelete();
            refetch(true);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
