import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

export default function UpdateCars({ car }) {
  const [show, setShow] = useState(false);
  const [updatedCar, setUpdatedCar] = useState({});

  const params = useParams();
  useEffect(() => {
    const putOneCar = async () => {
      try {
        await axios
          .put(`http://localhost:5000/cars/${params.id}`)
          .then((res) => {
            setUpdatedCar(res.data.CARS);
            console.log(res);
            toast.success(
              `annance de ${res.data.CARS.marque} ${res.data.CARS.model} est modifier`,
              {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              }
            );
          });
      } catch (error) {
        console.log(error);
      }
    };
    putOneCar();
  }, []);

  return (
    <div>
      <button onClick={() => setShow(true)}> Update</button>
      {show && (
        <div className="modal-bg">
          <div className="modal">
            <h1>modifer l'annance</h1>
            <div className="field">
              <span>Marque :</span>
              <input
                type="text"
                placeholder={updatedCar.marque}
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, marque: e.target.value })
                }
              />
            </div>
            <div className="field">
              <span>Model :</span>
              <input
                type="text"
                placeholder={updatedCar.model}
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, model: e.target.value })
                }
              />
            </div>
            <div className="field">
              <span>Kilométrage :</span>
              <input
                type="text"
                placeholder="Kilométrage"
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, kilometrage: e.target.value })
                }
              />
            </div>
            <div className="field">
              <span>Mise en circulation :</span>
              <input
                type="text"
                placeholder="Mise en circulation"
                onChange={(e) =>
                  setUpdatedCar({
                    ...updatedCar,
                    Mise_en_circulation: e.target.value,
                  })
                }
              />
            </div>
            <div className="field">
              <span>Carburant :</span>
              <input
                type="text"
                placeholder="Carburant"
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, Carburant: e.target.value })
                }
              />
            </div>
            <div className="field">
              <span>Puissance fiscal :</span>
              <input
                type="text"
                placeholder="Puissance fiscal"
                onChange={(e) =>
                  setUpdatedCar({
                    ...updatedCar,
                    Puissance_fiscal: e.target.value,
                  })
                }
              />
            </div>
            <div className="field">
              <span>Téléphone :</span>
              <input
                type="text"
                placeholder="Téléphone"
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, telephone: e.target.value })
                }
              />
            </div>
            <div className="field">
              <span>Prix :</span>
              <input
                type="text"
                placeholder="Prix"
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, prix: e.target.value })
                }
              />
            </div>
            <div className="field">
              <span>Gouvernorat :</span>
              <input
                type="text"
                placeholder="Gouvernorat"
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, Gouvernaurat: e.target.value })
                }
              />
            </div>
            <div className="field">
              <span>Boite vitesse :</span>
              <input
                type="text"
                placeholder="Boite vitesse"
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, boit_vitesse: e.target.value })
                }
              />
            </div>

            <div className="D">
              <input
                type="text"
                placeholder="Description"
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, description: e.target.value })
                }
              />
            </div>
            <div className="I">
              <input
                type="text"
                placeholder="Image 1"
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, image1: e.target.value })
                }
              />
            </div>
            <div className="I">
              <input
                type="text"
                placeholder="Image 2"
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, image2: e.target.value })
                }
              />
            </div>
            <div className="I">
              <input
                type="text"
                placeholder="Image 3"
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, image3: e.target.value })
                }
              />
            </div>

            <div className="cancel_save">
              <button className="cancel" onClick={() => setShow(false)}>
                Cancel
              </button>
              <button
                onClick={() => {
                  setShow(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
