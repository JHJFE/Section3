import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import './variables.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import { initialState } from './assets/state';

function App() {
  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  return (
    <Router>
      <Nav  cartItems = {cartItems}/>
      <Routes>
        {/* 첫화면 느낌인데 .. 클릭되면 장바구니 상태도 바뀌여야하니까.. setCartItems도 내려줘야하지 않나..? */}
        <Route path="/" element={<ItemListContainer setCartItems = {setCartItems} cartItems = {cartItems} items={items} />} />
        <Route
          path="/shoppingcart"
          element={<ShoppingCart cartItems={cartItems} items={items} setCartItems = {setCartItems} />}
        />
      </Routes>
      <img
        id="logo_foot"
        src={`${process.env.PUBLIC_URL}/codestates-logo.png`}
        alt="logo_foot"
      />
    </Router>
  );
}

export default App;
