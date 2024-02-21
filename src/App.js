import React from 'react';
import { CartProvider } from './allcontext/allCartContext';
import Header from './allcomponents/HeaderFormat';
import Home from './allpages/HomeFormat';
import Footer from './allcomponents/FooterFormat';
import Cart from './allcomponents/CartFormat';

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Home />
        <Footer />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
