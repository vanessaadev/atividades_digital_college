import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Categorias from "./pages/Categorias";
import MeusPedidos from "./pages/MeusPedidos";
import Produtos from "./pages/Produtos";

function Home() {
  return(
    <>
      <h1>Olá mundo!</h1>
      <button>Clique aqui</button>
    </>
  );
}

export default function App() {
  return(
    <>
      <BrowserRouter>
      <Navbar/>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/categorias" element={<Categorias/>} />
          <Route path="/meus-pedidos" element={<MeusPedidos/>} />
           {/*na route a path e element são obrigatorios, a barra é a raiz do dominio  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}