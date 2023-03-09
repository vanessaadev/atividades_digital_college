import "./estilo.css";
import React from "react";
import { Link } from "react-router-dom";

function Lista() {

  let cursos = [
    "Marketing",
    "Fullstack",
    "Data Analytics"
  ];

  return (
  <ul>
    {/* forma mais didática e legível */}
    {cursos.map(function(cada) {
      return (<li> {cada} </li>);
    })}

    {/* forma mais abreviada do .map usando arrow function*/}
    {cursos.map(x => <li>{x}</li>)}
  </ul>
  )
}

export default function App() {  
  let nome = "Vanessa"
return(
<>
  <header>
    <Link to="articles">Home</Link>
  </header>
  <h1>Olá mundo!</h1>
  <h2 className="red">Digital College</h2>
  <hr/>
  <p>Bem vindo {nome}</p>
  <Lista/>
</>
)  
}