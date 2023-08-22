import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from './components/CartWidget/CartWidget';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos al reino del Ente"/>
      <CartWidget/> 
      <header className="App-header">
      </header>
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
