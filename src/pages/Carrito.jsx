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

                <div className="Productos-total">
                        

                        <div className="Cuadro-productos">
                                <h4>Producto 1____________________$---</h4>
                                <h4>Producto 2____________________$---</h4>
                                <h4>Producto 3____________________$---</h4>
                                <h4>Producto 4____________________$---</h4>
                                <h4>Producto 5____________________$---</h4>
                        </div>

                        <div className="Cuadro-total">
                                <h4>Subtotal: __________</h4>
                                <h4>Costo de envio: __________</h4>
                                <h4>Total: __________</h4>
                        </div>
                </div>


            <button className="btn btn-dark boton-carrito" type="submit">Finalizar compra</button>
        </div>
    
    </>
   );
}

export default Carrito;

