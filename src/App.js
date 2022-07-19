import './Components/Hearder'; 
import './Components/Formulario';
import './Components/Estilos.css';
import Header from './Components/Hearder';
import './App.css';
import Formulario from './Components/Formulario';
import Tareaestatic from './Components/Tareasestatic';


function App() {
  return (
    <div>
   <Header Titulo={"Mi lista de tareas"}/>     

   <Formulario/>

   <Tareaestatic/>
    </div>
  );
}

export default App;
