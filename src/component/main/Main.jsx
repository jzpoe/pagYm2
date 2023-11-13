import { Link, Outlet } from "react-router-dom";
import './main.css';

const Main = () => {
  return (
    <div >
       
        <ul className="enlacesMain">
          <li>
            <div className="containerMain1">
              <Link to="/Sedes" className="cardSedes">CLASES GRUPALES</Link>
            </div>
          </li> 
          <li>
            <div className="containerMain1">
              <Link to="/Clases" className="cardSedes">SPINIG</Link>
            </div>
          </li>
          <li>
            <div className="containerMain1">
              <Link to="/Servicios" className="cardSedes">FUNCIONAL</Link>
            </div>
          </li>
          <li>
            <div className="containerMain1">
              <Link to="/Bioseguridad" className="cardSedes">FORTALECIMIENTO</Link>
            </div>
          </li>
        </ul>
        
        <Outlet/>
      </div>
    
  );
}

export default Main;