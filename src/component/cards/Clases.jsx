import ScrollReveal from 'scrollreveal';

import './card.css'
import { useEffect } from 'react';

const Clases = () => {


useEffect(()=>{
ScrollReveal().reveal('#containerCard',{
  duration: 1000, // Duración de la animación en milisegundos
      reset: true, // Restablece la animación al hacer scroll hacia arriba
      origin: 'bottom', // Dirección desde donde aparecerá el elemento
      distance: '20px', // Distancia de desplazamiento
})

},[])

    return (
      <div id="containerCard">
        <img src="https://img.freepik.com/foto-gratis/vista-angulo-hombre-musculoso-irreconocible-preparandose-levantar-barra-club-salud_637285-2497.jpg?w=740&t=st=1699394392~exp=1699394992~hmac=60214d08beb28898f3e3ac9ed98b3559d87bb307e52b0f629f2d65ccf113006b" alt="hombre con barra" />
        
        
      </div>
      
    )
  }

  export default Clases