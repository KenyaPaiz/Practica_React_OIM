import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Titulo from './Components/Titulo';
import Personas from './Components/Personas';
import ListaPokemones from './Components/ListaPokemones';

/** creando un arreglo de personas */
const personas = [
    {
      "nombre":"Angel Elias",
      "apellido":"Rivera Molina",
      "direccion":"San Salvador",
      "telefono":"74856212",
      "correo":"angel@gmail.com"
    },
    {
      "nombre":"Adonay",
      "apellido":"Gonzalez",
      "direccion":"San Miguel",
      "telefono":"65128974",
      "correo":"adonay@gmail.com"
    },
   {
      "nombre":"Duvan",
      "apellido":"Castellano",
      "direccion":"Las Cabañas",
      "telefono":"72587412",
      "correo":"duvan@gmail.com"
   }
]

function App() {
  return (
    <div>
      {/** pasando las props de los otros componentes */}
      <Navbar autor="Kenia Paiz"/>
      <div className='container'>
          <Titulo titulo="Bienvenido! Lista de Usuarios"/>
            <br></br>
          <Personas arreglo_persona={personas} />
          <br></br>
          <Titulo titulo="Listado de Pokemones"/>
          <ListaPokemones />
          <br></br>
          
      </div>
      <Footer fecha={new Date()}></Footer>
      
    </div>
  );
}

export default App;
