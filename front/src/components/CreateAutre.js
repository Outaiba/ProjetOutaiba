import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

export default function CreateAutre() {
  const navigate = useNavigate();
  const [autre, setAutre] = useState({
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
      await axios
        .post("http://localhost:5000/autres/add", autre)
        .then((res) => {
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
              <th colspan="2">Annance pour une véhicule occasion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="marque"
                  onChange={(e) =>
                    setAutre({ ...autre, marque: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="model"
                  onChange={(e) =>
                    setAutre({ ...autre, model: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="prix"
                  onChange={(e) => setAutre({ ...autre, prix: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="gouvernorat"
                  onChange={(e) =>
                    setAutre({ ...autre, gouvernorat: e.target.value })
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
                    setAutre({ ...autre, Mise_en_circulation: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Puissance_fiscale"
                  onChange={(e) =>
                    setAutre({ ...autre, Puissance_fiscale: e.target.value })
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
                    setAutre({ ...autre, Kilometrage: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Carburant"
                  onChange={(e) =>
                    setAutre({ ...autre, Carburant: e.target.value })
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
                    setAutre({ ...autre, Téléphone: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Boîte_de_vitesse"
                  onChange={(e) =>
                    setAutre({ ...autre, Boîte_de_vitesse: e.target.value })
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
                    setAutre({ ...autre, Carburant: e.target.value })
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
          <input
            type="text"
            placeholder="Description"
            onChange={(e) =>
              setAutre({ ...autre, Description: e.target.value })
            }
          />
        </div>
        <div className="image">
          <input
            type="text"
            placeholder="URL image 1"
            onChange={(e) => setAutre({ ...autre, image1: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL image 2"
            onChange={(e) => setAutre({ ...autre, image2: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL image 3"
            onChange={(e) => setAutre({ ...autre, image3: e.target.value })}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleCreate();
            navigate("/homeAutreV");
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}
