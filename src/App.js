import React, { useState } from "react";
import "./App.css";

import leao from "./asset/img/animais/animal-leão.jpg";
import cachorro from "./asset/img/animais/animal-dog.jpg";
import gato from "./asset/img/animais/animal-gato.jpg";
import morcego from "./asset/img/animais/animal-morcego.jpg";
import urso from "./asset/img/animais/animal-urso.jpg";
import baleia from "./asset/img/animais/animal-baleia.jpg";

import floresta from "./asset/img/paisagens/paisagem-floresta.jpg";
import montanha from "./asset/img/paisagens/paisagem-montanha.jpg";
import lago from "./asset/img/paisagens/paisagem-lago.jpg";
import oceano from "./asset/img/paisagens/paisagem-oceano.jpg";
import pantanal from "./asset/img/paisagens/paisagem-pantanal.jpg";
import savana from "./asset/img/paisagens/paisagem-savana.jpg";

export default function App() {
  
  const [categoria, setCategoria] = useState ("");
  const [busca, setBusca] = useState("");
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  
  const animais = [
    { nome: "leão", img: leao },
    { nome: "cachorro", img: cachorro },
    { nome: "gato", img: gato },
    { nome: "morcego", img: morcego },
    { nome: "urso", img: urso },
    { nome: "baleia", img: baleia },
  ];
  
  const paisagens = [
    { nome: "floresta", img: floresta },
    { nome: "montanha", img: montanha },
    { nome: "lago", img: lago },
    { nome: "oceano", img: oceano },
    { nome: "pantanal", img: pantanal },
    { nome: "savana", img: savana },
  ];

  const imagensAtuais = categoria === "animais" ? animais : paisagens;

  const imagensFiltradas = imagensAtuais.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Busca por Imagens da Natureza</h1>

      <input
        type="text"
        name="img"
        id="imagens"
        placeholder="procurar"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <button onClick={() => setCategoria("paisagens")}>Paisagens</button>
      <button onClick={() => setCategoria("animais")}>Animais</button>

      <ul className="galeria">
        {imagensFiltradas.map((item, index) => (
          <li key={index}>
            <img className="imgItem" src={item.img} alt={item.nome}  onClick={ () => setImagemSelecionada(item.img)}/>
          </li>
          
        ))}
      </ul>
            {imagemSelecionada && (
        <div className="modal" onClick={() => setImagemSelecionada(null)}>
          <img className="modal-img" src={imagemSelecionada} alt="zoom" />
        </div>
      )}
      <footer><p>Todos os direitos reservados</p></footer>
    </div>
  );
}
