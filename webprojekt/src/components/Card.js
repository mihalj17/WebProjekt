import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "./card.css";
import Popup from "./Popup";
import ImageSlider from "./ImageSlider";

function Card({
  id,
  name,
  year,
  acceleration,
  cylinders,
  displacement,
  horespower,
  milesPerGalon,
  origin,
  weight,
  price,
  mileage,
  img,
}) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div
      className="card text-center bg-dark animate__animated animate__fadeInUp card-flex-row"
      key={id}
    >
      <img src={img[0]} alt="a wallpaper" className="card-img-sm-left" />

      <div className="card-body">
        <div className="card-body text-light">
          <h4 className="card-title text-start m-2">{name}</h4>

          <div className="m-2 text-start">
            <span>Year: </span>
            {year}
          </div>
          <div className="m-2 text-start">
            <span>Price: {price} $</span>
          </div>
          <div className="m-2 text-start">
            <span>Milage: {mileage} km</span>
          </div>
        </div>

        <div className="d-flex flex-row mb-3 justify-content-center">
          <div className="p-2">
            {" "}
            <Button variant="primary" onClick={() => setButtonPopup(true)}>
              Details
            </Button>
            <Popup
              id={id}
              trigger={buttonPopup}
              setTrigger={setButtonPopup}
              name={name}
              year={year}
              acceleration={acceleration}
              cylinders={cylinders}
              displacement={displacement}
              horespower={horespower}
              milesPerGalon={milesPerGalon}
              origin={origin}
              weight={weight}
              price={price}
              mileage={mileage}
              img={img}
            ></Popup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
