import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const Servicios = () => {


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
        <img src="https://img.freepik.com/foto-gratis/mujer-abdominales-visibles-haciendo-fitness_23-2150228900.jpg?size=626&ext=jpg&uid=R100736454&ga=GA1.1.1263050847.1698249098&semt=sph" alt="mujer levantando pesa" />
        <div>
          <h1>ENTRENAMIENTO FUNCIONAL</h1>
        <p>
        Entrena con propósito, pon tu cuerpo a funcionar como tiene que ser. Disfruta de nuestro entrenamiento funcional y mejora tu desempeño diario.
        </p>
        </div>
      </div>
    )
  }

  export default Servicios