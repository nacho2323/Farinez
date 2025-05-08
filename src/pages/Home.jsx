
import React from "react";
import { images } from '../assets/imagenes';
import '../styles/Home.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";


function Home(){


    const settings = {
        dots: true,
        infinite: true,
        speed: 840,
        slidesToShow: 4,
        slidesToScroll: 3
      };

    return (
        
        <>

        <div className="Home">
                <div className="ImagenInicio" style={{backgroundImage: `url(${images.Fondo}`}}>
                
                    <h1>Bienvenido a Farinez</h1>
                
                </div>

                <h2>Nuestros Productos </h2>
            

                <div className="slider-container">

                    <Slider {...settings}>

                        <div>

                            <div className="card">
                                <img src={images.Chocolate} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Chocolate</h5>
                                    
                                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                                    <img src={images.Leche} className="card-img-top" alt="..." />

                                    <div className="card-body">
                                        <h5 className="card-title">Leche de almendras</h5>
                                        
                                        <a href="#" className="btn btn-primary">Agregar al carrito</a>
                                    </div>
                                </div>
                        </div>

                        <div>
                                <div className="card">
                                <img src={images.PanRallado} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Pan rallado</h5>
                                    
                                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                                <div className="card">
                                <img src={images.Dulce} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Dulce de Leche</h5>
                                    
                                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>

                        <div>
                                <div className="card">
                                <img src={images.Alfajor} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Alfajor</h5>
                                    
                                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>



                        <div>
                                <div className="card">
                                <img src={images.Premezcla} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Premezcla</h5>
                                    
                                     <a href="#" className="btn btn-primary">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>


                    </Slider>
                </div>


                <div className="botonIr">
                    
              <Link to="/Productos" className="btn btn-dark"> Ver todos los productos</Link>    
                </div> 
                

                <h2>Nuestras Recetas </h2>
            

                <div className="slider-container">

                        <Slider {...settings}>

                                <div>

                                        <div className="card">
                                        <img src={images.Fondo} className="card-img-receta" alt="..." />

                                        <div className="card-body">
                                            <h5 className="card-title">Waffles</h5>
                                            
                                        </div>
                                    </div>
                                </div>


                                <div>
                                        <div className="card">
                                        <img src={images.Pizza} className="card-img-receta" alt="..." />

                                        <div className="card-body">
                                            <h5 className="card-title">Pizzas</h5>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div>
                                        <div className="card">
                                        <img src={images.Pan} className="card-img-receta" alt="..." />

                                        <div className="card-body">
                                            <h5 className="card-title">Panes</h5>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div>
                                        <div className="card">
                                        <img src={images.Galletas} className="card-img-receta" alt="..." />

                                        <div className="card-body">
                                            <h5 className="card-title">Galletas</h5>
                                            
                                        </div>
                                    </div>
                                </div>


                        </Slider>

                </div>



                <div className="botonIr">
                    <Link to="/Recetas" className="btn btn-dark"> Ver todas las recetas</Link> 
                </div> 



                <h2>Promociones </h2>
            
            <div className="GrupoCard">
                
                <div className="card">
                    <img src={images.Diez} className="card-img-top" alt="..." />

                
                </div>


                <div className="card">
                    <img src={images.DosUno} className="card-img-top" alt="..." />

                </div>

                <div className="card">
                    <img src={images.Treinta} className="card-img-top" alt="..." />

                </div>
                
            
            </div>
        </div>
    </>
    )
}

export default Home;