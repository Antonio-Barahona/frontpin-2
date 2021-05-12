import React from 'react';
import { Carousel, Button } from "react-bootstrap";
import imageSlide1 from "../../asset/images/slider-1.png";
import imageSlide2 from "../../asset/images/tren.jpg";
import imageSlide3 from "../../asset/images/lagoazul.jpg";

const Hero = () => {
  return (
    <section className='hero'>
     <Carousel controls={false}>
        <Carousel.Item>
          <img src={imageSlide1} className='d-block w-100' alt='First slide' />
          <Carousel.Caption>
            <h3>Landig del Proyecto Final <br></br> Nuestro Pirmer Proyecto M_E</h3>
            <p>Esta es nuestra version del proyecto<br></br> trabajamos duro y aqui se las presentamos.</p>
            <Button variant='primary'>Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={imageSlide2} className='d-block w-100' alt='Second slide' />
          <Carousel.Caption>
            <h3>un BackEnd Poderoso <br></br> PHP y Laravel</h3>
            <p>El desarrollo del Backend lo hicimos en PHP <br></br> toda la potencia y confiabilidad de un producto altamente probado .</p>
            <Button variant='primary'>Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={imageSlide3} className='d-block w-100' alt='Third slide' />

          <Carousel.Caption>
            <h3>React para el FrontEnd <br></br> Lo ultimo en experiencia de usuario</h3>
            <p>un hambiente instuitivo y simple <br></br> para que todos se sienta comodo.</p>
            
            <Button variant='primary'>Read More</Button>
          </Carousel.Caption >
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;
