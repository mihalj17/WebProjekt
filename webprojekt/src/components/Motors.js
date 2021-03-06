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
        "https://cdn1.cycletrader.com/v1/media/624b036310a7995f064ebca3.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/624b037e0a12bc1dec489cfe.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/624b04cc02e890200b20b20c.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
       "https://cdn1.cycletrader.com/v1/media/62a7499c8350a80a8e08704b.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
       "https://cdn1.cycletrader.com/v1/media/62a7499c8350a80a8e08704c.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
       "https://cdn1.cycletrader.com/v1/media/62a7499d8350a80a8e087051.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"

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
     "https://cdn1.cycletrader.com/v1/media/62acba02fe5d012dda537e44.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
     "https://cdn1.cycletrader.com/v1/media/62acba02cfb5db753e73a3d5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
     "https://cdn1.cycletrader.com/v1/media/62acba0216840767587e44b3.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"


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
     "https://cdn1.cycletrader.com/v1/media/62a976b5dd83fb221b0515a5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
     "https://cdn1.cycletrader.com/v1/media/62a976b58b031d7fed673125.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
     "https://cdn1.cycletrader.com/v1/media/62a976b5c136c4779b7d76b4.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
        "https://cdn1.cycletrader.com/v1/media/62acba011a18d351e62318d3.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/62acba01b90b260eda202768.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/62acba015136c828340c304a.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
     "https://cdn1.cycletrader.com/v1/media/62b1ed4b4528b556371e2ef5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
     "https://cdn1.cycletrader.com/v1/media/62b1ed4b8d09e8626c63cf11.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
    "img": [
      "https://cdn1.cycletrader.com/v1/media/62a63b111e42f663c322c503.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62a63b3333befa42ea4bd1d7.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62a63b85f6cbb15dc43e0491.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/6241d09e453b4d457e258278.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/626d425500325e66ea130019.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"

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
      "https://cdn1.cycletrader.com/v1/media/62b50860a1f33511302e1884.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62b5089a6924c074b214e028.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"

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
      "https://cdn1.cycletrader.com/v1/media/624b00c490c25a5f9072aa45.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/624b00b2faf8af341f5b06c1.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/62a2384d1f493752551487bb.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62a23852e1cb1d746e11e1a1.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/62534df16910ee75813a4f83.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62534ddd9d824c22c61dccd6.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/62b53b2116465d35d10d80b4.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62b53b2116465d35d10d80b5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/626f045b92c1b3359b5783d3.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/626f0461c9bf3b79852d20f3.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/62a47fc5285e5b3619622402.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62a47ffe4b80800a1814b994.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/62b557e1de17a57c0f500dd2.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62b557e1de17a57c0f500dd3.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/621e867ebd71d8520272fb12.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/621e8680a225834ef844cf96.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/628c782652ba975bcd5acef4.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/628c782652ba975bcd5acef5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/6292f2571c73ae30626d41a5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/6292f2581c73ae30626d41a6.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/62a521235ec5fa044111be14.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62a5213a4a848059920499b3.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/62ab825c1b55b11d5b2c11f2.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62ab825d1b55b11d5b2c11f3.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/62801d0b23b2ef22ab285b74.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62801d11c0c6e73ea1603b43.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/62a4a442cb6317453a546d6a.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/62a4a4429e392d6e267d14b1.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/6298b908b2d5ab47ec795982.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/6298b94424ca5f0fe51c0194.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
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
      "https://cdn1.cycletrader.com/v1/media/624b036310a7995f064ebca3.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/624b037e0a12bc1dec489cfe.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/624b04cc02e890200b20b20c.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
 
    ]
  },
  {
    "Name": "toyota corona",
    "Miles_per_Gallon": 25,
    "Cylinders": 4,
    "Displacement": 113,
    "Horsepower": 95,
    "Weight_in_lbs": 2228,
    "Acceleration": 14,
    "Year": "1971-01-01",
    "Origin": "Japan",
    "price": "876543",
    "mileage": "43243",
    "color": "Red",
    "img": [
      "https://cdn1.cycletrader.com/v1/media/629e26263c2dc51020764de0.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/629e26c0a7c8260c92118682.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"

      ]
  },
  {
    "Name": "ford pinto",
    "Miles_per_Gallon": 25,
    "Cylinders": 4,
    "Displacement": 98,
    "Horsepower": null,
    "Weight_in_lbs": 2046,
    "Acceleration": 19,
    "Year": "1971-01-01",
    "Origin": "USA",
    "price": "965432",
    "mileage": "12345",
    "color": "Red",
    "img": [
      "https://cdn1.cycletrader.com/v1/media/628aa81058650063ae16f8a8.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/628aa81477f8ae6bb4104243.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"

      ]
  },
  {
    "Name": "volkswagen super beetle 117",
    "Miles_per_Gallon": null,
    "Cylinders": 4,
    "Displacement": 97,
    "Horsepower": 48,
    "Weight_in_lbs": 1978,
    "Acceleration": 20,
    "Year": "1971-01-01",
    "Origin": "Europe",
    "price": "2345",
    "mileage": "3456",
    "color": "Red",
    "img": [
      "https://cdn1.cycletrader.com/v1/media/629f2afa03e45e17c436e7aa.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/629f2afa03e45e17c436e7ab.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"
     ]
  },
  {
    "Name": "amc gremlin",
    "Miles_per_Gallon": 19,
    "Cylinders": 6,
    "Displacement": 232,
    "Horsepower": 100,
    "Weight_in_lbs": 2634,
    "Acceleration": 13,
    "Year": "1971-01-01",
    "Origin": "USA",
    "price": "76543",
    "mileage": "87643",
    "color": "Red",
    "img": [
      "https://cdn1.cycletrader.com/v1/media/626180cf04173374695d7975.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
      "https://cdn1.cycletrader.com/v1/media/626180cf1914721ba1449498.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"

       ]
  }
];
*/
const Motors =() => {
  const [card, setTitle] = useState([]);
  useEffect(() => {
    getTitles();
  }, []);
  function getTitles() {
    const vozilaCollectionRef = collection(firestore, "Motors");
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
export default Motors;
