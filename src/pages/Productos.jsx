import React, { useState } from "react";
import { images } from '../assets/imagenes';
import '../styles/Productos.css';

function Productos() {
  const productos = [
    { id: 1, nombre: 'Chocolate Colonial', precio: 5000, imagen: images.Chocolate, descripcion: 'Chocolate Colonial con Stevia 70% cacao de 100 gramos' },
    { id: 2, nombre: 'Leche de almendras', precio: 3000, imagen: images.Leche, descripcion: 'Leche de almendras sabor original 1 Litro' },
    { id: 3, nombre: 'Pan rallado Smams', precio: 2000, imagen: images.PanRallado, descripcion: 'Pan rallado Smams 150g' },
    { id: 4, nombre: 'Dulce de Leche', precio: 4000, imagen: images.Dulce, descripcion: 'Dulce de leche La Serenisima 400g' },
    { id: 5, nombre: 'Alfajor Celienergy', precio: 5000, imagen: images.Alfajor, descripcion: 'Alfajor Celienergy relleno de avellanas 50g' },
    { id: 6, nombre: 'Premezcla', precio: 6000, imagen: images.Premezcla, descripcion: 'Premezcla Santa Maria libre de gluten 100g' },
    { id: 7, nombre: 'Nesquik', precio: 7000, imagen: images.Nesquik, descripcion: 'Chocolate Nesquik menos azucar 300g' },
  ];


  const [ordenAscendente, setOrdenAscendente] = useState(true); /*Ordenar por precio*/ 
  const [busqueda, setBusqueda] = useState(''); /*Buscar*/
  const [paginaActual, setPaginaActual] = useState(1); /*Paginacion*/
  const [productoActivo, setProductoActivo] = useState(null); /*Para boton descripcion*/
  

  const productosPorPagina = 4; /*Productos que se muestran por pagina*/

  const productosFiltrados = productos
    .filter(prod =>
      prod.nombre.toLowerCase().includes(busqueda.toLowerCase())  /*Busqueda*/
    )
    .sort((a, b) => {
      return ordenAscendente ? a.precio - b.precio : b.precio - a.precio; /*Ordenar por precio*/
    });

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = productosFiltrados.slice(inicio, fin);

  return (
    <div className="Home">
      <div className="ImagenInicio" style={{ backgroundImage: `url(${images.FondoProductos})` }}>
        <h1>Conocé nuestros productos</h1>


        {/*Buscar*/}
        <nav className="Busqueda">
            <form className="form-inline my-2 my-lg-0" onSubmit={(e) => { e.preventDefault();}}> {/*e.preventDefault() para que al hacer enter en buscar no vaya a la primer pagina*/}
          
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" value={busqueda}  onChange={(e) => setBusqueda(e.target.value)} />

            <button className="btn btn-dark" type="submit">Buscar</button>

            </form>
        </nav>
      </div>

      {/* Ordenar*/}

      <div className="grupo-boton-cards">
        <div className="orden-precio">

          <button className="btn btn-secondary" onClick={() => setOrdenAscendente(!ordenAscendente)}>
            Ordenar por precio: {ordenAscendente ? 'Menor a mayor' : 'Mayor a menor'}
          </button>

        </div>

      {/* Mostrar productos */}
        <div className="Grupo-Cards-Productos">
          {   
            productosPagina.map(prod => (   /*recorre todos los productos ya ordenados o buscados*/

              <div key={prod.id} className="card card-Producto">

                <img src={prod.imagen} className="card-img-top" alt={prod.nombre} />

                <div className="card-body">

                  <div className="card-titulo-precio">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <h5 className="card-precio">${prod.precio}</h5>
                  </div>

                  <button className="btn btn-dark" onClick={() => setProductoActivo(prod)}>Descripción</button> 
                  <button className="btn btn-primary">Agregar al carrito</button>
                  
                </div>
              </div>
            ))
          
          }
        </div>

      {/* Paginacion */}
        <nav>
          <ul className="pagination">

            <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setPaginaActual(p => p - 1)}>Anterior</button>
            </li>
            
            {[...Array(totalPaginas)].map((_, i) => (
              <li key={i} className={`page-item ${paginaActual === i + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => setPaginaActual(i + 1)}>{i + 1}</button>
              </li>
            ))}
            
            <li className={`page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setPaginaActual(p => p + 1)}>Siguiente</button>
            </li>
          
          </ul>
        </nav>
      </div>

      {/* Descripcion del producto */} {/* productoActivo && significa si no es null entonces: */}
      {productoActivo && (  
        <div className="modal-detalle">
          <div className="modal-contenido">

            <h2>{productoActivo.nombre}</h2>
            <img src={productoActivo.imagen} alt={productoActivo.nombre} style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} />
            
            <p><strong>Precio:</strong> ${productoActivo.precio}</p>
            <p><strong>Descripción:</strong> {productoActivo.descripcion}</p>

            <button className="btn btn-secondary" onClick={() => setProductoActivo(null)}>Cerrar</button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Productos;

