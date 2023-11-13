

import { Carousel } from 'react-responsive-carousel';

const Carrusel = () => {
  return (
    <Carousel  showArrows={true} infiniteLoop={true}>
    <div>
    <img src="/src/img/haciendo-fitness.jpg" alt="Imagen 1" />
    </div>
    <div>
    <img src="/src/img/dumbbell_1719695.png" alt="Imagen 1" />
    </div>
    <div>
    <img src="/src/img/dumbbell_3043888.png" alt="Imagen 1" />
    </div>
    <div>
    <img src="/src/img/hand-grip_10772854.png" alt="Imagen 1" />
    </div>
    <div>
    <img src="/src/img/hand-grip_10772854.png" alt="Imagen 1" />
    </div>
    </Carousel>
  )
}

export default Carrusel
