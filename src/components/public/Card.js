import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

const Card = ({personaje}) => {

  return (
    // <div className="col">
    //   <div className="card shadow-sm">
    //     <img src={personaje.image} className="card-img-top"></img>
    //     <div className="card-body">
    //       <h2 className="card-text">
    //         {personaje.name}
    //       </h2>
    //       <div className="d-flex justify-content-between align-items-center">
    //         <div className="btn-group">
    //           <Link to={`/detail/${personaje.id}`} type="button" className="btn btn-sm btn-outline-secondary">
    //             Detalles
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='card bg-dark animate__animated animate__fadeInDown'>
      <div className='overflow'>
        <img src={personaje.image} alt='' className='card-img-top' />
      </div>
      <div className='card-body text-light'>
        <h2 className='card-title'>{personaje.name}</h2>
        
        <Link to={`/detail/${personaje.id}`} className='btn btn-outline-secondary'>
          Detalles
        </Link>
      </div>
    </div>
  );
};

export default Card;
