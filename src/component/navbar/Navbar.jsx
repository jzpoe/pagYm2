import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => {
    ScrollReveal().reveal('.imagenLogo', {
      duration: 1000,
      reset: true,
      origin: 'bottom',
      distance: '20px',
    })
    ScrollReveal().reveal('.gymNavbar', {
      duration: 1000,
      origin: 'right',
      distance: '20px',
    });
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='div-container'>
      <nav className={`containerEnlaces ${isScroll ? "colored-nav" : "transparent-nav"}`}>
        <button className='menuhamburger' onClick={toggleMenu}>☰</button>
        <ul className={`enlaces ${isOpen ? "open" : ""}`}>
          <li>SEDES</li>
          <li>CLASES</li>
          <li>SERVICIOS</li>
          <li>BIOSEGURIDAD</li>
        </ul>
      </nav>

      <div className="container-boton">
        <button className='micuentaBoton'>MI CUENTA</button>
      </div>

      

      <div className="container-logo">
        <img src="./src/img/mujer-abdominales-visibles-haciendo-fitness.jpg" alt="" />
        <img src="./src/img/mujer-abdominales-visibles-haciendo-fitness.jpg" alt="" />
        <img src="./src/img/mujer-abdominales-visibles-haciendo-fitness.jpg" alt="" />
      </div>

      {/* <div className="class-logo">
        <img className='imagenLogo' src="./src/img/logo.png" alt="logo de gimnasio" />
      </div> */}
      
      
      <div className='container-nameGym'>
        <div className='nameGym'>CARDIOS</div>
      </div>
    </div>
  );
};

export default Navbar;
