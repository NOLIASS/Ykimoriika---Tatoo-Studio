import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Booking from './pages/Booking/Booking'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Navbar brand="YKIMORIIKI" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App