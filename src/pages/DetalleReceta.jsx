import { useParams } from "react-router-dom";
import { images } from '../assets/imagenes';

const recetas = [
{ id: 1, nombre: 'Waffles con dulce de leche', imagen: images.Fondo, },
{ id: 2, nombre: 'Pizza sin tacc', imagen: images.Pizza },
{ id: 3, nombre: 'Pan sin gluten', imagen: images.Pan },
{ id: 4, nombre: 'Galletas', imagen: images.Galletas },
];

function DetalleReceta(){
    
  const { id } = useParams(); // obtiene el ID de la URL
  const receta = recetas.find(p => p.id === parseInt(id));

 if (!receta) {
    return <h2>Receta no encontrada</h2>;
  }

  return(
    <>
        <div className="Receta"><h2>{receta.nombre}</h2>
        </div>

    </>
    
  )
}

export default DetalleReceta;