

import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

import './cardPromo.css'
const CardPromo = () => {

    useEffect(()=>{
        ScrollReveal().reveal('.containerPromo',{
          duration: 1000, // Duración de la animación en milisegundos
              reset: true, // Restablece la animación al hacer scroll hacia arriba
              origin: 'bottom', // Dirección desde donde aparecerá el elemento
              distance: '20px', // Distancia de desplazamiento
        })
      },[])

  return (
    <div className="containerPromo"> 
      <div className="box1">
        <h1>PLAN AGIL</h1> 
        <p>lleva tu plan por 49.000 mes</p> 
        <button className='botomPromo'>aplica</button>
        </div>
        
      <div className="box2">
        <h1>PLAN PROMO</h1>
        <p>
        lleva tu plan por el valor de 89.000
        </p>
        <div className='botonPromo'>
        <button className='botomPromo'>aplica</button>
        </div>
         </div>
         
    </div>
  )
}

export default CardPromo
