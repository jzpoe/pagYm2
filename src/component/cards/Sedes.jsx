import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

import './card.css'
const Sedes = () => {

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
        <img src="https://img.freepik.com/foto-gratis/muscular-hombre-haciendo-levantamiento-pesas-gimnasio_1163-3551.jpg?size=626&ext=jpg&uid=R100736454&ga=GA1.1.1263050847.1698249098&semt=sph" alt="hombre levantando pesa" />
        <div>
        <h1>CLASES GRUPALES</h1>
        <p>Ponte en forma mientras te diviertes</p>
        </div>
      </div>
    )
  }

export default Sedes