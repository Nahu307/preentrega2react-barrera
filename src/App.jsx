import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from './components/CartWidget/CartWidget';
import { Routes , Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBarStyle from "./components/NavBar/NavBar.css"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
      <NavBar/>
      <CartWidget/> 
      <Routes>
        <Route path='/' element = {<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
