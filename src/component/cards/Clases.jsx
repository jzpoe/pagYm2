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
        <img src="https://img.freepik.com/foto-gratis/entrenador-ayudando-principiantes-gimnasio_23-2149561880.jpg?w=1380&t=st=1700052629~exp=1700053229~hmac=aa166fbf933ec805e5ece659cc45fc48b45b129f722def5f7b353e59bbfc4d0a"/>
        <h1>SPINNIG</h1>
        <p>¡Descubre la revolución del fitness con nuestras clases de spinning en [Nombre del Gimnasio]! Sumérgete en una experiencia única que fusiona la emoción del ciclismo de interior con sesiones llenas de energía y ritmo vibrante.</p>
      </div>
      
    )
  }

  export default Clases