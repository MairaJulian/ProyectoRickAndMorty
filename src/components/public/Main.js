
import Cards from './Cards';
import React, { useEffect, useState } from 'react'
// import RickAndMortyService from '../../services/RickAndMorty.service';

const Main = ({personajes, personajesFiltrados, setPersonajesFiltrados, search, modificarPersonajesFiltrados}) => {

  // useEffect(() => {
  //   setPersonajesFiltrados(personajesFiltrados.filter((p) => p.name.toLowerCase().include(search.toLowerCase())))
  // }, [search])


  return (
    <main>
      {personajesFiltrados.length > 0 ?
                <Cards personajesFiltrados={personajesFiltrados} modificarPersonajesFiltrados={modificarPersonajesFiltrados}/>
                :
                <h1 className="display-5 fw-bold text-center">No hay coincidencias..</h1>
                // <Cards personajes={personajes} />
            }
      {/* <Cards personajes={personajes} personajesFiltrados={personajesFiltrados} setPersonajesFiltrados={setPersonajesFiltrados} search={search}/> */}
    </main>
  )
}

export default Main







// export default class Main extends Component {

//     constructor({personajes}) {
//       super(personajes);
//       this.state = {personajes : [] };
//     }

//     componentDidMount() {
//       // RickAndMortyService.getAllPersonajes()
//       //     .then((pepe) => this.setState({personajes : pepe.results}))
//       //     .catch((error) => console.log(error));

//     }

//     render() {
//       return (
//         <main>
//           <Cards />
//         </main>
//       )
//     }

// }




// const Main = () => {

//   return (
    // <main>
    //   <Cards />
    // </main>
//   );
// };

// export default Main;
