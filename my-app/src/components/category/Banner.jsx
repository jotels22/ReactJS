import React from 'react';
import { Carousel, CarouselItem, Image } from 'react-bootstrap';
import img1 from "../img/zapas-nike.jpg"
import img2 from "../img/gorras.jpg"
import img3 from "../img/campera-jean.jpg"
function Banner() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <Image className='carousel-img' src={img1} text="" />
        <Carousel.Caption>
          <h3>SORPRENDE A TUS AMIGOS CON LA NUEVA COLECCION</h3>
          <p>Las nuevas AirMax NIKE ONE ya estan a la venta por solo $99.999</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='carousel-img' src={img3} text="Second slide" />
        <Carousel.Caption>
          <h3>NUEVA TEMPORADA PRIMAVERAL</h3>
          <p>30% DE DESCUENTO EN EFECTIVO</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='carousel-img' src={img2} text="Third slide" />
        <Carousel.Caption>
          <h3>GORRAS SAVAGE PARA LUCIR EL MEJOR LOOK</h3>
          <p>
            HECHAS DE CUERO SINTETICO Y SE AMOLDAN PERFECTAMENTE A LA CABEZA
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;