import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function Create() {
  const navigate = useNavigate();
  const [car, setCar] = useState({
    marque: "",
    model: "",
    prix: "",
    gouvernorat: "",
    Mise_en_circulation: "",
    Puissance_fiscale: "",
    Kilometrage: "",
    Carburant: "",
    Boîte_de_vitesse: "",
    Téléphone: "",
    Description: "",
    image1: "",
    image2: "",
    image3: "",
  });

  const handleCreate = async () => {
    try {
      await axios.post("http://localhost:5000/cars/add", car).then((res) => {
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
          <h1>Créer une annonce</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th colspan="2">Annance pour une voiture occasion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="marque"
                  onChange={(e) => setCar({ ...car, marque: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="model"
                  onChange={(e) => setCar({ ...car, model: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="prix"
                  onChange={(e) => setCar({ ...car, prix: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="gouvernorat"
                  onChange={(e) =>
                    setCar({ ...car, gouvernorat: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Mise_en_circulation"
                  onChange={(e) =>
                    setCar({ ...car, Mise_en_circulation: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Puissance_fiscale"
                  onChange={(e) =>
                    setCar({ ...car, Puissance_fiscale: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Kilometrage"
                  onChange={(e) =>
                    setCar({ ...car, Kilometrage: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Carburant"
                  onChange={(e) =>
                    setCar({ ...car, Carburant: e.target.value })
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
                    setCar({ ...car, Téléphone: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Boîte_de_vitesse"
                  onChange={(e) =>
                    setCar({ ...car, Boîte_de_vitesse: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Carburant"
                  onChange={(e) =>
                    setCar({ ...car, Carburant: e.target.value })
                  }
                />
              </td>
              <td>
                <input type="text" placeholder="couleur" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="description">
          <input type="text" placeholder="Description" />
        </div>
        <div className="image">
          <input
            type="text"
            placeholder="URL image 1"
            onChange={(e) => setCar({ ...car, image1: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL image 2"
            onChange={(e) => setCar({ ...car, image1: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL image 3"
            onChange={(e) => setCar({ ...car, image1: e.target.value })}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleCreate();
            navigate("/");
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}
