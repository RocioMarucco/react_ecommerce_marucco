import './App.css'
import NavBar from './assets/Components/NavBar/NavBar'
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <div>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a nuestro lavandar'}/>
      </div>
    </>
  )
}

export default App
