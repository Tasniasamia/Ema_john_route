import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Product from './Component/Product/Product'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header></Header>
    <Outlet></Outlet>

     {/* <Product></Product> */}
    </div>
  )
}

export default App
