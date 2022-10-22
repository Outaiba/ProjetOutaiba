import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_logo">
        <img
          src="https://media1.giphy.com/media/3oKIPmnZ2IxoAQBta8/giphy.gif"
          alt="logo footer"
        />
      </div>
      <div className="Footer-G">
        <h1>Marque voiture</h1>
        <p>Toutes les marques</p>
        <p>Voitures d'occasion</p>
        <p>Moto d'occasion</p>
        <p>Véhicules Professionnels</p>
      </div>
      <div className="Footer-M">
        <h1>Qui sommes-nous ?</h1>
        <p>Contactez-nous</p>
        <p>Règlement de publication</p>
      </div>
      <div className="Footer-D">
        <h1>Auto occasion</h1>
        <p>
          Achat et vente de véhicule d'occasion l'un des meilleurs endroits pour
          acheter une voiture d'occasion en Tunisie.
        </p>
      </div>
    </div>
  );
}
