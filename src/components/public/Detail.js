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

    <div className="album py-5 bg-light">
      <div className="container">
      <div className="">
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
            <small className="text-muted">{personaje.status}</small>
            <div className="">
              <div className="btn-group">
              <Link to={`/`} type="button" className="btn btn-sm btn-outline-secondary">
                Volver
              </Link>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
  

export default Detail



