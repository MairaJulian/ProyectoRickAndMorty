import './NavBar.css'

const Navbar = ({modificarSearch}) => {  
  
  return (
    <header className="headerContainer">
      <div className="linksContainer">
        <ul className='lista'>
          <li><a href="/" className="home">Home</a></li>
          <li><a href="https://www.linkedin.com/in/maira-julian-768a001b0/" className="linkedin" target="_blank">Linkedin</a></li>
          <li><a href="https://github.com/MairaJulian" className="github" target="_blank">GitHub</a></li>
        </ul>
      </div>
      <div className='buscador'>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">  
          <input onChange={({target})=>{modificarSearch(target.value);}} type="search" className="form-control form-control-dark text-bg" placeholder="Buscar..." aria-label="Buscar" />
        </form>
      </div>
    </header>
    
    
    // <header className="p-3 text-bg-dark">
    //     <div className="container">
    //       <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    //         <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
    //           <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
    //           <li><a href="https://www.linkedin.com/in/maira-julian-768a001b0/" className="nav-link px-2 text-secondary" target="_blank">Linkedin</a></li>
    //           <li><a href="https://github.com/MairaJulian" className="nav-link px-2 text-secondary" target="_blank">GitHub</a></li>
    //         </ul>
    //         <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">  
    //           <input onChange={({target})=>{modificarSearch(target.value);}} type="search" className="form-control form-control-dark text-bg" placeholder="Buscar..." aria-label="Buscar" />
    //         </form>
    //       </div>
    //     </div>
    //   </header>
  )
}

export default Navbar



