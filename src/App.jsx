import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./component/main/Main";
 
import Navbar from "./component/navbar/Navbar";
import Sedes from "./component/cards/Sedes";
import Servicios from "./component/cards/Servicios";
import Clases from "./component/cards/Clases";
import Bioseguridad from "./component/cards/Bioseguridad";
import CardPromo from "./component/cardpromo/CardPromo";
import NuestrasSedes from "./component/sedes/NuestrasSedes";
import Fotosfooter from "./component/fotosfooter/Fotosfooter";
import RompeTusLimites from "./rompeTusLimites/RompeTusLimites";

function App() {
  return (
    <>
   
      <BrowserRouter>
          <Navbar/>
          <Main/>
          
        <Routes>
          <Route path="/Sedes" element={<Sedes />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Clases" element={<Clases />} />
          <Route path="/Bioseguridad" element={<Bioseguridad />} />
          <Route
            path="/"
            element={<Navigate to="/Sedes" />}
          />
        </Routes>

      </BrowserRouter>
      <RompeTusLimites/>
      <NuestrasSedes/>
      <CardPromo/>
      <Fotosfooter/>
      
      
     

    </>
  );
}

export default App;
