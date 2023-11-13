import { useEffect } from "react"
import ScrollReveal from 'scrollreveal';

const Bioseguridad = () => {


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
        <img src="https://img.freepik.com/fotos-premium/equipo-gimnasio-gimnasio-oscuro-pesas-rejilla-centro-ejercicios-fitness-concepto-deporte_175682-11925.jpg?size=626&ext=jpg&uid=R100736454&ga=GA1.1.1263050847.1698249098&semt=sph" alt="imagen de gimnacio" />
        <div>
        <h1>TRANQUILO</h1>
        <p>Contamos con todos los medios de desinfeccion</p>
        </div>
        
      </div>
    )
  }

  export default Bioseguridad