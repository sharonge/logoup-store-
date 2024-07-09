import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, } from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home';
import Checkout from './components/OrderSummary';
import OrderSummary from './components/OrderSummary';
 



function App() {
  return (
    <>
 
    
     <Router>
   
     <Routes>
 
        <Route path='/' element={<Home />} />
        <Route path='/OrderSummary' element={<OrderSummary />} />
 
        </Routes>
    </Router>
  
    </>
 
  );
}

export default App;
