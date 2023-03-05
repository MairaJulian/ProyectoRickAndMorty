import React from 'react'
import { useParams, Link } from 'react-router-dom'
import RickAndMortyService from '../../services/RickAndMorty.service'
import { useEffect, useState } from 'react';

const Detail = () => {

  const {id} = useParams()

  const [personaje, setPersonaje] = useState({})

  useEffect(() => {
    RickAndMortyService.getPersonajeById(id).then((datosPersonaje)=>{setPersonaje(datosPersonaje)})
  }, [id])
  
  

  return (

    // <div className="album py-5 bg-light">
    //   <div className="container">

    //     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    //       <div className="col">
    //         <div className="card shadow-sm">
    //         <h2 className="card-text text-center">{personaje.name}</h2>
    //           <img src={personaje.image}></img>
    //           <div className="card-body">
    //             <p className="card-text">Species: {personaje.species}</p>
    //             <p className="card-text">Status: {personaje.status}</p>
    //             <p className="card-text">Location: {personaje.location.name}</p>
    //             <div className="d-flex justify-content-between align-items-center">
    //               <div className="btn-group">
    //               <Link to={`/`} type="button" className="btn btn-sm btn-outline-secondary">
    //                 Volver
    //               </Link>
    //               </div>
    //               <small className="text-muted">Rick and Morty</small>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="album py-5 bg-light">
      <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
        <div className="card shadow-sm">
            <h2 className="card-text text-center">
              {personaje.name}
            </h2>
          <img src={personaje.image}></img>
          <div className="card-body">
            <h6>
              {personaje.species}
            </h6>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              <Link to={`/`} type="button" className="btn btn-sm btn-outline-secondary">
                Volver
              </Link>
                
              </div>
              <small className="text-muted">{personaje.status}</small>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
    

    {/* <div className="text-bg me-md pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
      <h3>{personaje.name}</h3>
      <h6>{personaje.species}</h6>
      <img src={personaje.image}></img>
      <br/>
      <Link to={`/`} type="button" className="btn btn-sm btn-outline-secondary">
        Volver
      </Link>
    </div>
    </div> */}
  

export default Detail
