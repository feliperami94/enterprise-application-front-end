import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Providers from './pages/providers/Providers'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Restock from './pages/restock/Restock'
import Inventory from './pages/inventory/Inventory'
import Bills from './pages/bills/Bills'
import Receipts from './pages/receipts/Receipts'
import ProviderList from './component/ProviderList'
import Home from './pages/home/Home'

import './App.css'
import FormProviderPost from './component/FormProviderPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav className='flex sm:justify-left space-x-4 p-5 bg-gray-400'>
          <Link to="/" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Home</Link>
          <Link to="/provider" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Providers</Link>
          {/* <Link to="/shopping-cart">Shopping Cart</Link>
          <Link to="/restock">Restock</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/bills">Bills </Link>
          <Link to="/receipts">Receipts</Link> */}

      </nav>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/provider" element={<Providers />}/>
            {/* <Route path="/shopping-cart" element={<ShoppingCart />}/>
            <Route path="/restock" element={<Restock />}/>
            <Route path="/inventory" element={<Inventory />}/>
            <Route path="/bills" element={<Bills />}/>
            <Route path="/receipts" element={<Receipts />}/> */}
          </Routes>
    </BrowserRouter>
  )
}

export default App
