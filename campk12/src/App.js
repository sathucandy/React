import React from "react";
import "./App.css";
import Container from "./Components/Container/Card_Container";
import Jumb from "./Components/Jumbotron/Jumb";
import MainArea from "./Components/Nav/MainArea";

function App() {
  return (
    <div>
      <MainArea />
      <Jumb />
      <Container />
    </div>
  );
}

export default App;
