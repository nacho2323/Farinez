import React, { useState } from "react";
import { images } from '../assets/imagenes';
import '../styles/Carrito.css';

function Carrito() {
    
  const [nombre, setNombre] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');

  return (
    <>
        <div className="Home">
                <div className="Cuadro-datos">
                    
                    <nav className="datos">
                        
                        <form className="form-inline my-2 my-lg-0" onSubmit={(e) => { e.preventDefault(); }} >
                            
                            <input className="form-control mr-sm-2" type="search" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            <input className="form-control mr-sm-2" type="search" placeholder="Domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
                            <input className="form-control mr-sm-2" type="search" placeholder="Codigo postal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
                        
                        </form>
                    </nav>
                </div>


                <h2>Tu carrito</h2>

                <div className="Cuadro-productos">
                        <h4>No hay productos en el carrito</h4>
                </div>
        </div>
    
    </>
   );
}

export default Carrito;

