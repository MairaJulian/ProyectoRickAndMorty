
import { useEffect, useState } from 'react';
import Card from './Card';
import './Cards.css';

const Cards = ({personajes, personajesFiltrados, search, modificarPersonajesFiltrados}) => {

  useEffect(() => {
    console.log("se modifico search");
    console.log(personajes);
    
    const filtro = personajes.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    
    console.log(filtro);
    modificarPersonajesFiltrados(filtro)
  }, [search])
  console.log("estoy en cards");
  console.log("jjjjj - ",search);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {personajesFiltrados.map((pers) => <Card personaje={pers} />)}
        </div>
      </div>
    </div>
  );
};

export default Cards;
