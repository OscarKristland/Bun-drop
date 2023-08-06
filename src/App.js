import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./components/Home";
import Menu from "./components/Menu";
import Basket from "./components/Basket";
import Payment from "./components/Payment";
import Product from "./components/Product";
import NotFound from './components/NotFound';

function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/basket" element={<Basket />}/>
          <Route path="/payment" element={<Payment />}/>
          <Route path="/:productId" element={<Product />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </Router>
  );
}

export default App;
