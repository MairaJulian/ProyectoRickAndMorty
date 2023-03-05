
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/public/Detail';
import Footer from './components/public/Footer';
import Main from './components/public/Main';
import Navbar from './components/public/Navbar';
import UserForm from './components/public/UserForm';
import { API_RM } from './constants/Api.constants';
import RickAndMortyService from './services/RickAndMorty.service';


function App() {

  const [personajes, setPersonajes] = useState([])
  const [personajesFiltrados, setPersonajesFiltrados] = useState([])
  const [search, setSearch] = useState("")

  const modificarSearch = (palabraABuscar) => {
    console.log("se esta ejecutando la funcion modificarSearch");
    setSearch(palabraABuscar);
  };

  console.log("alalala - "+search);
  
  const modificarPersonajesFiltrados = (filtro) => {
    console.log("funcion modificarPersonajesFiltrados");
    setPersonajesFiltrados(filtro);
  };
  
  // useEffect(() => {
  //   fetch(API_RM.PERSONAJES)
  //     .then(response => response.json())
  //     .then(data => setPersonajes(data.results));
  //     console.log(personajes);
  //     console.log("se está ejecutando el primer useeffect");
  // }, []);
  
  useEffect(() => {
    RickAndMortyService.getAllPersonajes()
    .then((pepe) => setPersonajes(pepe.results))
    .catch((error) => console.log(error));
    console.log("se está ejecutando el primer useeffect");
  }, [])
  
  useEffect(() => {
    RickAndMortyService.getAllPersonajes()
    .then((pepe) => setPersonajesFiltrados(pepe.results))
    .catch((error) => console.log(error));
    console.log("se está ejecutando el segundo useeffect");
  }, [])
  
  console.log("tiene contenido 1"+personajes);
  console.log("tiene contenido 2"+personajesFiltrados);
  // console.log(search);
  // // const mapPersonajes = personajes.map(personaje => <Card personaje={personaje}/>)
  // // console.log(mapPersonajes);
  

  return (
    <div>
      <Navbar modificarSearch={modificarSearch}/>
      <Routes>
        <Route exact path="/" element={<Main personajes={personajes} setPersonajes={setPersonajes} personajesFiltrados={personajesFiltrados} setPersonajesFiltrados={setPersonajesFiltrados} search={search} modificarPersonajesFiltrados={modificarPersonajesFiltrados}/>}/>
        <Route exact path="/detail/:id" element={<Detail/>}/>
        <Route exact path="/userform" element={<UserForm/>}/>
        <Route/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;




