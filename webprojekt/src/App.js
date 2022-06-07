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
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Cars from "./components/Cars";
import Motors from "./components/Motors";
import { Route, Router, Routes } from "react-router-dom";
import Filter from "./components/Filter";

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Container className="d-flex flex-row">
          <Filter />
          <Motors></Motors>
          
          
        </Container>
      </header>
    </div>
 
  );
}

export default App;
