import ItemListContainer from './components/itemlistcontainer.js';
import NavBar from './components/navbar.js';


function App()  {

  return (
      <>
        <NavBar></NavBar>
        <ItemListContainer greeting="Sección Ropa Masculina"></ItemListContainer>
        <main>Contenido de la Página</main>
        <footer>Footer</footer>
      </>
  );
}

export default App;
