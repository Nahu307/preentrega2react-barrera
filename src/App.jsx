import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from './components/CartWidget/CartWidget';
import { Routes , Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
      <NavBar/>
      <CartWidget/> 
      <ItemListContainer/>
      <Routes>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          is a count {count}
        </button>
      </div>
    </>
  )
}

export default App
