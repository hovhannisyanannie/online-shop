import {Routes, Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Register from "../src/pages/register/Register";
import Login from "../src/pages/login/Login";
import Footer from './components/footer/Footer';
import ProductItem from './pages/productItem/ProductItem';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path='/products/:id' element={<ProductItem/>} />
          <Route path='/contact' element={<Contact />} />  
          <Route path='/about' element={<About />} />  
          <Route path='/login' element={<Login />} />  
          <Route path='/register' element={<Register />} />  
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*' element={<NotFound />} />  
      </Routes>
      <Footer />
    </>
  );
}

export default App;


