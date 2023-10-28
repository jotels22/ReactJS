import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './components/pages/contact.jsx';
import Home from './components/pages/home';
import Detail from './components/pages/detail';
import "./global.css"
import "./contact.css"
import { CartProvider } from './components/cartContext.js';



function App()  {



  return (
      <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/producto/:name" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
      </CartProvider>
  );
}

export default App;
