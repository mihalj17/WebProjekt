import React, { Component, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { firestore } from "../lib/init-firebase";
import Card from "./Card";
import { Button } from "react-bootstrap";
/*
var menu = [
  {
    Name: "Chevrolet Chevelle Malibu",
    Miles_per_Gallon: 18,
    Cylinders: 8,
    Displacement: 307,
    Horsepower: 130,
    Weight_in_lbs: 3504,
    Acceleration: 12,
    Year: "1966",
    Origin: "USA",
    price: "3450",
    mileage: "234000",
    color: "Blue",
    img: [
      "https://cdn1.cycletrader.com/v1/media/624b036310a7995f064ebca3.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/624b037e0a12bc1dec489cfe.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/624b04cc02e890200b20b20c.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
    ],
  },
  {
    Name: "Buick Skylark 350",
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 350,
    Horsepower: 165,
    Weight_in_lbs: 3693,
    Acceleration: 11.5,
    Year: "1970",
    Origin: "USA",
    price: "12350",
    mileage: "126000",
    color: "Gold",
    img: [
      "https://cdn1.cycletrader.com/v1/media/62534df16910ee75813a4f83.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
    ],
  },
  {
    Name: "Plymouth Satellite",
    Miles_per_Gallon: 18,
    Cylinders: 8,
    Displacement: 318,
    Horsepower: 150,
    Weight_in_lbs: 3436,
    Acceleration: 11,
    Year: "1968",
    Origin: "USA",
    price: "3432",
    mileage: "345000",
    color: "Yellow",
    img: [
      "https://cdn1.cycletrader.com/v1/media/628c8766529b8a31982cf6c8.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
    ],
  },
  {
    Name: "AMC Rebel SST",
    Miles_per_Gallon: 16,
    Cylinders: 8,
    Displacement: 304,
    Horsepower: 150,
    Weight_in_lbs: 3433,
    Acceleration: 12,
    Year: "1968",
    Origin: "USA",
    price: "15000",
    mileage: "52000",
    color: "Black",
    img: [
      "https://cdn1.cycletrader.com/v1/media/6285578d32476c1587689b74.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
    ],
  },
  {
    Name: "Ford Torino",
    Miles_per_Gallon: 17,
    Cylinders: 8,
    Displacement: 302,
    Horsepower: 140,
    Weight_in_lbs: 3449,
    Acceleration: 10.5,
    Year: "1969",
    Origin: "USA",
    price: "12345",
    mileage: "456700",
    color: "Grey",
    img: [
      "https://cdn1.cycletrader.com/v1/media/6238b48b447af3088535e302.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
    ],
  },
  {
    Name: "Ford Galaxie 500",
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 429,
    Horsepower: 198,
    Weight_in_lbs: 4341,
    Acceleration: 10,
    Year: "1964",
    Origin: "USA",
    price: "12500",
    mileage: "350000",
    color: "Gold",
    img: [
      "https://cdn1.cycletrader.com/v1/media/628bf55d1bb5e716a9202496.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
    ],
  },
  {
    Name: "Chevrolet Impala",
    Miles_per_Gallon: 14,
    Cylinders: 8,
    Displacement: 454,
    Horsepower: 220,
    Weight_in_lbs: 4354,
    Acceleration: 9,
    Year: "1960",
    Origin: "USA",
    price: "78000",
    mileage: "12000",
    color: "Blue",
    img: [
      "https://cdn1.cycletrader.com/v1/media/625740efa719d7454001f504.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
    ],
  },
];
*/
const Cars =() => {
  const [card, setTitle] = useState([]);
  useEffect(() => {
    getTitles();
  }, []);
  function getTitles() {
    const vozilaCollectionRef = collection(firestore, "Cars");
    getDocs(vozilaCollectionRef).then((response) => {
      const titles = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setTitle(titles);
    });
  }
/*
  function handleClick() {
    menu.forEach(function (obj) {
      const cars = collection(firestore, "Motors");
      addDoc(cars, {
        name: obj.Name,
        milesPerGalon: obj.Miles_per_Gallon,
        cylinders: obj.Cylinders,
        displacement: obj.Displacement,
        horespower: obj.Horsepower,
        weight: obj.Weight_in_lbs,
        acceleration: obj.Acceleration,
        year: obj.Year,
        origin: obj.Origin,
        price: obj.price,
        mileage: obj.mileage,
        img: obj.img,
      });
    });
  }
*/
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {card.map((card) => (
          <div className="d-flex mt-4" key={card.id}>
            <Card
              id={card.id}
              name={card.data.name}
              year={card.data.year}
              acceleration={card.data.acceleration}
              cylinders={card.data.cylinders}
              displacement={card.data.displacement}
              horespower={card.data.horespower}
              milesPerGalon={card.data.milesPerGalon}
              origin={card.data.origin}
              weight={card.data.weight}
              price={card.data.price}
              mileage={card.data.mileage}
              img={card.data.img}
            />
          </div>
        ))}
      </div>
      { /*<Button onClick={handleClick}>makto</Button>*/}
    </div>
  );
}
export default Cars;