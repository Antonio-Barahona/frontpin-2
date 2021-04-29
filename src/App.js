import React from 'react';
import Header from './components/header/Header.js'
import Hero from './components/hero/Hero.js';
import './App.scss';
import About from './components/about/About.js';
import Products from './components/products/Products.js';
import Services from './components/servicios/Services.js';
import Contact from './containers/Contact/Contact.js';
import Footer from './components/footer/footer.js';


const App = () => {
  return (
    <div className="App">
    <>
    <Header />
    <Hero />
    <About />
    <Products />
    <Services />
    <Contact />
    <Footer />

    </>

    </div>
  );
}

export default App;
