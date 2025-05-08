import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Recetas from './pages/Recetas'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Recetas' element={<Recetas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;