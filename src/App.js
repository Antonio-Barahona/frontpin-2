import React, {useState} from 'react';
import { auth, google} from './containers/Contact/firebase'
import Header from './components/header/Header.js'
import Hero from './components/hero/Hero.js';
import './App.scss';
import About from './components/about/About.js';
import Products from './components/products/Products.js';
import Services from './components/servicios/Services.js';
import Contact from './containers/Contact/Contact.js';
import Footer from './components/footer/footer.js';
// import { useStateValue } from './StateProvider';;

// function App() {
//   const [ user, setUser] = useState(null)
//   const [photo, setPhoto] = useState(null)
//   const [displayname, setDisplayName] = useState(null)
//   const loginGoogle = () => {
//     auth.signInWithPopuo(google)
//     .then(respuesta => {
//       console.log(respuesta.user)
//       setUser(respuesta.user)
//       setPhoto(respuesta.user.photoURL)
//       setDisplayName(respuesta.user.displayName)
//     }).catch(err => {
//       console.log(err)
//     })
//   }
// }

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
