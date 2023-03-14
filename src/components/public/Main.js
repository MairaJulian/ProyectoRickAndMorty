
import Cards from './Cards';


const Main = ({personajes, personajesFiltrados, setPersonajesFiltrados, search, modificarPersonajesFiltrados}) => {

  return (
    <main>
      {personajesFiltrados.length > 0 ?
                <Cards personajesFiltrados={personajesFiltrados} modificarPersonajesFiltrados={modificarPersonajesFiltrados} personajes={personajes} search={search}/>
                :
                <h1 className="display-5 fw-bold text-center">No hay coincidencias..</h1>
                
            }
      
    </main>
  )
}

export default Main
