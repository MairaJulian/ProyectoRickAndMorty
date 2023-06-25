
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/public/Detail';
import Footer from './components/public/Footer';
import Main from './components/public/Main';
import Navbar from './components/public/Navbar';
import UserForm from './components/public/UserForm';
import RickAndMortyService from './services/RickAndMorty.service';


function App() {

  const [personajes, setPersonajes] = useState([])
  const [personajesFiltrados, setPersonajesFiltrados] = useState([])
  const [search, setSearch] = useState("")

  console.log(search);

  const modificarSearch = (palabraABuscar) => {
    console.log("se esta ejecutando la funcion modificarSearch");
    setSearch(palabraABuscar);
  };

  console.log("alalala - "+search);
  
  const modificarPersonajesFiltrados = (filtro) => {
    console.log("funcion modificarPersonajesFiltrados");
    setPersonajesFiltrados(filtro);
  };
  
  useEffect(() => {
    RickAndMortyService.getAllPersonajes()
    .then((pepe) => {
      setPersonajesFiltrados(pepe.results)
      setPersonajes(pepe.results)
    })
    .catch((error) => console.log(error));
    console.log("se está ejecutando el segundo useeffect");
  }, [])
  
  console.log("tiene contenido 1",personajes);
  console.log("tiene contenido 2"+personajesFiltrados);
  
  return (
    <div className='App'>
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




