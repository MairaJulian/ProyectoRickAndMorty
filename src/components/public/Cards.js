
import { useEffect, useState } from 'react';
import Card from './Card';

const Cards = ({personajes, personajesFiltrados, setPersonajesFiltrados, search, modificarPersonajesFiltrados}) => {
  // const {personajes} = props
  // console.log(personajes);
  // console.log(search);

  useEffect(() => {
    console.log("se modifico search");
    
    // const filtro = personajesFiltrados.filter((p) => p.name.toLowerCase().include(search.toLowerCase()))
    // console.log(filtro);
    // modificarPersonajesFiltrados(filtro)
  }, [search])
  console.log("estoy en cards");
  console.log("jjjjj - "+search);
  
  // const [personajesFiltrados, setPersonajesFiltrados] = useState([])
  // setPersonajesFiltrados(personajes.filter(p => p.include(search)))
  
  
  
  // const mapPersonajes = personajes.map(personaje => <Card personaje={personaje}/>)
  // const mapPersonajesFiltrados = personajesFiltrados.map(personaje => <Card personaje={personaje}/>)
  // console.log(search);
  

  // const mapPersonajes = personajes.map(personaje => <Card personaje={personaje}/>)
  // console.log(mapPersonajes);


  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {/* ${search != "" ? {mapPersonajesFiltrados}:{mapPersonajes}} */}
          {/* {mapPersonajesFiltrados} */}
          {personajesFiltrados.map((pers) => <Card personaje={pers} />)}
        </div>
      </div>
    </div>
  );
};

export default Cards;
