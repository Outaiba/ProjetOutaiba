import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Cars({ moto }) {
  const [refetch, setRefetch] = useState(false);

  const handleDelete = async () => {
    try {
      await axios
        .delete(`http://localhost:5000/motos/${moto._id}`, moto)
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
  return (
    <div className="XX">
      <Link to={`/detailMoto/${moto._id}`}>
        <div className="post">
          <img src={moto.image1} alt="" />

          <div className="des">
            <h2>{moto.prix} </h2>
            <div className="title">
              <h1>{moto.marque} </h1>
              <h1>{moto.model} </h1>
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
