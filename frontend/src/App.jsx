import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ProductsList from './pages/ProductsList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home/>
  )
}

export default App
