import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Cars({ autre }) {
  const [refetch, setRefetch] = useState(false);

  const handleDelete = async () => {
    try {
      await axios
        .delete(`http://localhost:5000/autres/${autre._id}`, autre)
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
      <Link to={`/detailAutre/${autre._id}`}>
        <div className="post">
          <img src={autre.image1} alt="" />

          <div className="des">
            <h2>{autre.prix} </h2>
            <div className="title">
              <h1>{autre.marque} </h1>
              <h1>{autre.model} </h1>
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
