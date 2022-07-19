import React from "react";
import './Estilos.css';

function Header ({Titulo}){
     return( 
     <div>
         <h2 className="titulo">
            <a href='#!' className="brand-logo">{Titulo}</a>
         </h2>
     </div>
)
  
}
export default Header;