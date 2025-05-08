import React,{useState} from "react";
import Logo from "../assets/Logo.png"
import Carrito from "../assets/carrito.png"
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  
  return (
    <nav className="navbar navbar-expand-lg bg-transparent fixed-top " >
      <div className="container-fluid">

        
        <Link to="/" className="nav-link"><img src={Logo} width={150} height={70}/></Link>
        <div>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item ">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>

            <li className="nav-item">
              <Link to="/Productos" className="nav-link">Productos</Link>
            </li>

            <li className="nav-item">
              <Link to="/Recetas" className="nav-link">Recetas</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setMostrarCarrito(true)}><img src={Carrito} width={30} height={30}/></a>
            </li>

            {mostrarCarrito && (
              <div className="carrito">
                <div className="carrito-info">
                      <h5>Tu carrito esta vacio</h5>
                      <button className="btn btn-dark" onClick={() => setMostrarCarrito(false)}>Ir al carrito</button>
                </div>
              </div>
            )}

          </ul>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
