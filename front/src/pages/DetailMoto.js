import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpdateCars from "../components/UpdateCars";

export default function Detail({ car }) {
  const [detail, setDetail] = useState({});
  const params = useParams();
  useEffect(() => {
    const getOneMoto = async () => {
      try {
        await axios
          .get(`http://localhost:5000/motos/${params.id}`)
          .then((res) => {
            setDetail(res.data.MOTOS);
            console.log(res);
            toast.success(
              `annance de ${res.data.MOTOS.marque} ${res.data.MOTOS.model}`,
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
    getOneMoto();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home_page">
        <div className="sslide">
          <ul class="slides">
            <input type="radio" name="radio-btn" id="img-1" checked />
            <li class="slide-container">
              <div class="slide">
                <img src={detail.image1} />
              </div>
              <div class="nav">
                <label for="img-6" class="prev">
                  &#x2039;
                </label>
                <label for="img-2" class="next">
                  &#x203a;
                </label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-2" />
            <li class="slide-container">
              <div class="slide">
                <img src={detail.image2} />
              </div>
              <div class="nav">
                <label for="img-1" class="prev">
                  &#x2039;
                </label>
                <label for="img-3" class="next">
                  &#x203a;
                </label>
              </div>
            </li>

            <input type="radio" name="radio-btn" id="img-3" />
            <li class="slide-container">
              <div class="slide">
                <img src={detail.image3} />
              </div>
              <div class="nav">
                <label for="img-2" class="prev">
                  &#x2039;
                </label>
                <label for="img-4" class="next">
                  &#x203a;
                </label>
              </div>
            </li>

            <li class="nav-dots">
              <label for="img-1" class="nav-dot" id="img-dot-1"></label>
              <label for="img-2" class="nav-dot" id="img-dot-2"></label>
              <label for="img-3" class="nav-dot" id="img-dot-3"></label>
            </li>
          </ul>
        </div>
      </div>
      <div className="deta">
        <h1>{detail.marque}</h1>
        <h1>{detail.model}</h1>
        <h1>{detail.prix} DT</h1>
        <div>
          <div className="create">
            <table>
              <thead>
                <tr>
                  <th colspan="2">Informations générales :</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>marque</td>
                  <td>{detail.marque}</td>
                </tr>
                <tr>
                  <td>model</td>
                  <td>{detail.model}</td>
                </tr>
                <tr>
                  <td>Kilometrage</td>
                  <td>{detail.Kilometrage}</td>
                </tr>
                <tr>
                  <td>Mise_en_circulation</td>
                  <td>{detail.Mise_en_circulation}</td>
                </tr>
                <tr>
                  <td>Puissance_fiscale</td>
                  <td>{detail.Puissance_fiscale}</td>
                </tr>
                <tr>
                  <td>gouvernorat</td>
                  <td>{detail.gouvernorat}</td>
                </tr>
                <tr>
                  <td>Carburant</td>
                  <td>{detail.Carburant}</td>
                </tr>

                <tr>
                  <td>Téléphone</td>
                  <td>{detail.Téléphone}</td>
                </tr>
              </tbody>
            </table>
            <div className="descrip">{detail.Description}</div>

            <UpdateCars />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
