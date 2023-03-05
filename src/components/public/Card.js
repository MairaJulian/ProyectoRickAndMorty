import React from "react";
import { Link } from "react-router-dom";

const Card = ({personaje}) => {


  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={personaje.image}>
          
        </img>
        <div className="card-body">
          <h6>
            {personaje.species}
          </h6>
          <h2 className="card-text">
            {personaje.name}
          </h2>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/detail/${personaje.id}`} type="button" className="btn btn-sm btn-outline-secondary">
                Detalles
              </Link>
              
            </div>
            <small className="text-muted">{personaje.status}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
