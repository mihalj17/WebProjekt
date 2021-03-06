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
        "Name": "Chevrolet Chevelle Malibu",
        "Miles_per_Gallon": 18,
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Acceleration": 12,
        "Year": "1966",
        "Origin": "USA",
        "price": "3450",
        "mileage": "234000",
        "color": "Blue",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/eto3zqurckrs8rqxdj251z9gj.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/5ma3oc0oo0t9pqi2a6vsv43x2.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"

        ]
      },
      {
        "Name": "Buick Skylark 350",
        "Miles_per_Gallon": 15,
        "Cylinders": 8,
        "Displacement": 350,
        "Horsepower": 165,
        "Weight_in_lbs": 3693,
        "Acceleration": 11.5,
        "Year": "1970",
        "Origin": "USA",
        "price": "12350",
        "mileage": "126000",
        "color": "Gold",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/trucks/dealer/2a16cf13bfe4d88aa8680d92e121c23d.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/trucks/dealer/a053127212d4ab92d67f09296b382ea8.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "Plymouth Satellite",
        "Miles_per_Gallon": 18,
        "Cylinders": 8,
        "Displacement": 318,
        "Horsepower": 150,
        "Weight_in_lbs": 3436,
        "Acceleration": 11,
        "Year": "1968",
        "Origin": "USA",
        "price": "3432",
        "mileage": "345000",
        "color": "Yellow",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/a3nzamldz19pvgcqjhlmrnroc.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/1lm9bjiv8qzotawce6xqbcch4.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"

        ]
      },
      {
        "Name": "AMC Rebel SST",
        "Miles_per_Gallon": 16,
        "Cylinders": 8,
        "Displacement": 304,
        "Horsepower": 150,
        "Weight_in_lbs": 3433,
        "Acceleration": 12,
        "Year": "1968",
        "Origin": "USA",
        "price": "15000",
        "mileage": "52000",
        "color": "Black",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/trucks/private/dvm7w4d30jm36tvhf1ghpq1ij.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/trucks/private/3fef8nrf746s6m4dirjqss4kf.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"

        ]
      },
      {
        "Name": "Ford Torino",
        "Miles_per_Gallon": 17,
        "Cylinders": 8,
        "Displacement": 302,
        "Horsepower": 140,
        "Weight_in_lbs": 3449,
        "Acceleration": 10.5,
        "Year": "1969",
        "Origin": "USA",
        "price": "12345",
        "mileage": "456700",
        "color": "Grey",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/2v63gzoxeh6djk2wvmpiaudmw.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/construction/dealer/7ca614d105dd2b583012725c2b856e1e.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "Ford Galaxie 500",
        "Miles_per_Gallon": 15,
        "Cylinders": 8,
        "Displacement": 429,
        "Horsepower": 198,
        "Weight_in_lbs": 4341,
        "Acceleration": 10,
        "Year": "1964",
        "Origin": "USA",
        "price": "12500",
        "mileage": "350000",
        "color": "Gold",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/1qmzjhlfhi5uadedax101vklh.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/9bvxdm5z1fhcpgdaukqj3w9yb.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "Chevrolet Impala",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 454,
        "Horsepower": 220,
        "Weight_in_lbs": 4354,
        "Acceleration": 9,
        "Year": "1960",
        "Origin": "USA",
        "price": "78000",
        "mileage": "12000",
        "color": "Blue",
        "img": ["https://trucksales.pxcrush.net/trucksales/trucks/private/42s9lesngquksb90um4ujdemp.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/trucks/private/7jydcsevt5hj679c21g2mhyho.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "buick estate wagon (sw)",
        "Miles_per_Gallon": 14,
        "Cylinders": 8,
        "Displacement": 455,
        "Horsepower": 225,
        "Weight_in_lbs": 3086,
        "Acceleration": 10,
        "Year": "1970-01-01",
        "Origin": "USA",
        "price": "12876",
        "mileage": "432876",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/7lzw0lu6aisz81dzthazxyc8a.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/98bts1gzetl0tedohhfjlewpo.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "toyota corona mark ii",
        "Miles_per_Gallon": 24,
        "Cylinders": 4,
        "Displacement": 113,
        "Horsepower": 95,
        "Weight_in_lbs": 2372,
        "Acceleration": 15,
        "Year": "1970-01-01",
        "Origin": "Japan",
        "price": "65498",
        "mileage": "3276",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/bvrim8fnfm57exxzmwnkwyjb0.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/d0ljxeodt44o1w2e053plpnvj.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "plymouth duster",
        "Miles_per_Gallon": 22,
        "Cylinders": 6,
        "Displacement": 198,
        "Horsepower": 95,
        "Weight_in_lbs": 2833,
        "Acceleration": 15.5,
        "Year": "1970-01-01",
        "Origin": "USA",
        "price": "43276",
        "mileage": "21876",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/52hw48k8sf5c5wuvehl63kljr.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/6p8lklvv1kdg03bwu1lynppbv.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "amc hornet",
        "Miles_per_Gallon": 18,
        "Cylinders": 6,
        "Displacement": 199,
        "Horsepower": 97,
        "Weight_in_lbs": 2774,
        "Acceleration": 15.5,
        "Year": "1970-01-01",
        "Origin": "USA",
        "price": "432654",
        "mileage": "54764",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/68wsarj34llv0idl8vsgovd7t.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/ra5mh9t7girucaf8nlnq0f7z.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "ford maverick",
        "Miles_per_Gallon": 21,
        "Cylinders": 6,
        "Displacement": 200,
        "Horsepower": 85,
        "Weight_in_lbs": 2587,
        "Acceleration": 16,
        "Year": "1970-01-01",
        "Origin": "USA",
        "price": "876543",
        "mileage": "987543",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/trucks/dealer/3446e83d31479cefd5fa491c7c67560c.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/trucks/dealer/ce6a00d50a99039b46f73305c6ff0e16.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "datsun pl510",
        "Miles_per_Gallon": 27,
        "Cylinders": 4,
        "Displacement": 97,
        "Horsepower": 88,
        "Weight_in_lbs": 2130,
        "Acceleration": 14.5,
        "Year": "1970-01-01",
        "Origin": "Japan",
        "price": "43276",
        "mileage": "32765",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/9yvrjmri6lpledgz6mws3mog.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/48fdjfyzdbpe385od4up7ecwo.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "volkswagen 1131 deluxe sedan",
        "Miles_per_Gallon": 26,
        "Cylinders": 4,
        "Displacement": 97,
        "Horsepower": 46,
        "Weight_in_lbs": 1835,
        "Acceleration": 20.5,
        "Year": "1970-01-01",
        "Origin": "Europe",
        "price": "43765",
        "mileage": "32876",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/5qodn7a8pq0uuj7lz3y8lk0ru.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/3427h2yvgxyhkuo158po154c6.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "peugeot 504",
        "Miles_per_Gallon": 25,
        "Cylinders": 4,
        "Displacement": 110,
        "Horsepower": 87,
        "Weight_in_lbs": 2672,
        "Acceleration": 17.5,
        "Year": "1970-01-01",
        "Origin": "Europe",
        "price": "43276",
        "mileage": "76543",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/trucks/dealer/e98813c0b5f93911f5f23b284dd7c160.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/trucks/dealer/99f77fea4b6f76d78385e36c63a6f607.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "audi 100 ls",
        "Miles_per_Gallon": 24,
        "Cylinders": 4,
        "Displacement": 107,
        "Horsepower": 90,
        "Weight_in_lbs": 2430,
        "Acceleration": 14.5,
        "Year": "1970-01-01",
        "Origin": "Europe",
        "price": "43876",
        "mileage": "987654",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/trucks/dealer/dac6fb8bda3ed04d7ea4fdee9323f0c5.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/trucks/dealer/dee01d6208778136f4ffbe0136921449.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "saab 99e",
        "Miles_per_Gallon": 25,
        "Cylinders": 4,
        "Displacement": 104,
        "Horsepower": 95,
        "Weight_in_lbs": 2375,
        "Acceleration": 17.5,
        "Year": "1970-01-01",
        "Origin": "Europe",
        "price": "4327654",
        "mileage": "267889",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/88jzsq14nead3ntve9oqm6g8v.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/8o5qp7ezeyegnpufkvcz46z62.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "bmw 2002",
        "Miles_per_Gallon": 26,
        "Cylinders": 4,
        "Displacement": 121,
        "Horsepower": 113,
        "Weight_in_lbs": 2234,
        "Acceleration": 12.5,
        "Year": "1970-01-01",
        "Origin": "Europe",
        "price": "543876",
        "mileage": "43287",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/trucks/dealer/b0ea734afe537ac900ad4216ab7bcbbf.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/trucks/dealer/e6600c3bc526797d1a3cb418c16ae756.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "amc gremlin",
        "Miles_per_Gallon": 21,
        "Cylinders": 6,
        "Displacement": 199,
        "Horsepower": 90,
        "Weight_in_lbs": 2648,
        "Acceleration": 15,
        "Year": "1970-01-01",
        "Origin": "USA",
        "price": "234876",
        "mileage": "438765",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/9iu4dqq7vjk8wmujsdyhc4ukm.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/e8qawgkmln1r12mkkr5aapuri.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "ford f250",
        "Miles_per_Gallon": 10,
        "Cylinders": 8,
        "Displacement": 360,
        "Horsepower": 215,
        "Weight_in_lbs": 4615,
        "Acceleration": 14,
        "Year": "1970-01-01",
        "Origin": "USA",
        "price": "32765",
        "mileage": "87654",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/uaackhozcd5a8wohf5iiluft.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/708ojofkhiskkd0ihn7lx6ixo.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "chevy c20",
        "Miles_per_Gallon": 10,
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 200,
        "Weight_in_lbs": 4376,
        "Acceleration": 15,
        "Year": "1970-01-01",
        "Origin": "USA",
        "price": "76543",
        "mileage": "5432",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/cgip6cp9232altukj8pen0hty.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/bmpxwwj3vj7mzybmbxoj486sm.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "dodge d200",
        "Miles_per_Gallon": 11,
        "Cylinders": 8,
        "Displacement": 318,
        "Horsepower": 210,
        "Weight_in_lbs": 4382,
        "Acceleration": 13.5,
        "Year": "1970-01-01",
        "Origin": "USA",
        "price": "543543",
        "mileage": "54343",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/a97vvqw2qg5r4fqa72hfg71y2.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/bpa8gxn45q0pz5i2dajrewkgn.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "hi 1200d",
        "Miles_per_Gallon": 9,
        "Cylinders": 8,
        "Displacement": 304,
        "Horsepower": 193,
        "Weight_in_lbs": 4732,
        "Acceleration": 18.5,
        "Year": "1970-01-01",
        "Origin": "USA",
        "price": "76543",
        "mileage": "9876",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/trucks/private/ecie4ejfmahmzhtrppf3dnxyo.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/trucks/private/d6q3t1b6m9r7mnhc92ycbpkcs.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "datsun pl510",
        "Miles_per_Gallon": 27,
        "Cylinders": 4,
        "Displacement": 97,
        "Horsepower": 88,
        "Weight_in_lbs": 2130,
        "Acceleration": 14.5,
        "Year": "1971-01-01",
        "Origin": "Japan",
        "price": "87654",
        "mileage": "3456",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/a3nzamldz19pvgcqjhlmrnroc.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/1s962h6a7k7y2p4qf2aktqeoc.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      },
      {
        "Name": "chevrolet vega 2300",
        "Miles_per_Gallon": 28,
        "Cylinders": 4,
        "Displacement": 140,
        "Horsepower": 90,
        "Weight_in_lbs": 2264,
        "Acceleration": 15.5,
        "Year": "1971-01-01",
        "Origin": "USA",
        "price": "76543",
        "mileage": "2345",
        "color": "Red",
        "img": [
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/1qmzjhlfhi5uadedax101vklh.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
            "https://trucksales.pxcrush.net/trucksales/cars/dealer/eg2mqo56c426500xltijr7si.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600"
        ]
      }
];
*/
const Trucks =() => {
  const [card, setTitle] = useState([]);
  useEffect(() => {
    getTitles();
  }, []);
  function getTitles() {
    const vozilaCollectionRef = collection(firestore, "Trucks");
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
      const cars = collection(firestore, "Trucks");
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
      {/*<Button onClick={handleClick}>trucks</Button>*/}
    </div>
  );
}
export default Trucks;
