import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './assets/Components/NavBar/NavBar'
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './assets/Components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a nuestro Lavandar'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
