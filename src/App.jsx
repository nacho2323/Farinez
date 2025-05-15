import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Recetas from './pages/Recetas'
import Carrito from './pages/Carrito'
import DetalleReceta from './pages/DetalleReceta'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MercadoPagoPractica from './components/MercadoPagoPractica'
function App(){
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Recetas' element={<Recetas />} />
        <Route path='/MercadoPagoPractica' element={<MercadoPagoPractica />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path="/Recetas/:id" element={<DetalleReceta />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;