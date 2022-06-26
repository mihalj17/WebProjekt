import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Breadcrumb,
  Card,
  Form,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import Cars from "./components/Cars";
import Motors from "./components/Motors";
import { Route, Router, Routes } from "react-router-dom";
import { Switch } from "react-router";
import firebase from 'firebase/app';
import 'firebase/storage';//if using Fireba
import Trucks from "./components/Truck";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Cars></Cars>}> </Route>
    <Route path="/cars" element={<Cars></Cars>}> </Route>
    <Route path="/motors" element={<Motors></Motors>}> </Route>
    <Route path="/trucks" element={<Trucks></Trucks>}> </Route>
    </Routes>
    </div>
  );
}

export default App;
