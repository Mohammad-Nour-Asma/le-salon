import React from 'react';
import './App.css';
import Login from './Pages/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Meals from './Pages/Meals/Meals';
import MealDetails from './Pages/MealDetails/MealDetails';
import Cart from './Pages/Cart/Cart';
import { BaseURL } from './API/BaseURL';


function App() {
  const location = useLocation();

  return (
    <div className="App container">
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/meals' element={<Meals />} />
        <Route path='/meal/:id' element={<MealDetails />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </div>
  );
}

export default App;
