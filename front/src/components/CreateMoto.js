import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

export default function CreateMoto() {
  const navigate = useNavigate();
  const [moto, setMoto] = useState({
    marque: "",
    prix: "",
    gouvernorat: "",
    Kilometrage: "",
    Téléphone: "",
    Description: "",
    image1: "",
    image2: "",
    image3: "",
  });

  const handleCreate = async () => {
    try {
      await axios.post("http://localhost:5000/motos/add", moto).then((res) => {
        toast.success("Annance créer", {
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
    <div>
      <div className="create">
        <div className="creer_annace">
          <h1>Créer annonce </h1>
        </div>
        <table>
          <thead>
            <tr>
              <th colspan="2">Annance pour une moto occasion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="marque"
                  onChange={(e) => setMoto({ ...moto, marque: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="prix"
                  onChange={(e) => setMoto({ ...moto, prix: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="gouvernorat"
                  onChange={(e) =>
                    setMoto({ ...moto, gouvernorat: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Kilometrage"
                  onChange={(e) =>
                    setMoto({ ...moto, Kilometrage: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Téléphone"
                  onChange={(e) =>
                    setMoto({ ...moto, Téléphone: e.target.value })
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="description">
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setMoto({ ...moto, Description: e.target.value })}
          />
        </div>
        <div className="image">
          <input
            type="text"
            placeholder="URL image 1"
            onChange={(e) => setMoto({ ...moto, image1: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL image 2"
            onChange={(e) => setMoto({ ...moto, image2: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL image 3"
            onChange={(e) => setMoto({ ...moto, image3: e.target.value })}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleCreate();
            navigate("/homeMotos");
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}
