import React, { useEffect, useState } from 'react'



const Navbar = ({modificarSearch}) => {

  // const [search, setSearch] = useState("")
  
  
  return (
    <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">


            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
            </ul>


            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">  
              {/* <input onChange={handleInputChange} type="search" className="form-control form-control-dark text-bg" placeholder="Buscar..." aria-label="Buscar" /> */}
              <input onChange={({target})=>{modificarSearch(target.value);}} type="search" className="form-control form-control-dark text-bg" placeholder="Buscar..." aria-label="Buscar" />
            </form>

          </div>
        </div>
      </header>
  )
}

export default Navbar



