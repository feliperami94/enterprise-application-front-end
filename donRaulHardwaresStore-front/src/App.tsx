import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Providers from './pages/providers/Providers'
import Inventory from './pages/inventory/Inventory'
import Bills from './pages/bills/Bills'
import Receipts from './pages/receipts/Receipts'
import ProviderList from './component/provider/ProviderList'
import Home from './pages/home/Home'
import './App.css'
import FormProviderPost from './component/provider/FormProviderPost'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import GenerateBill from './pages/generateBill/GenerateBill'

function App() {
  const [count, setCount] = useState(0);
  const {user} = useSelector((state:RootState) => state.logged)
  


  return (
    <BrowserRouter>
    {user===null?
    <nav className='flex sm:justify-left space-x-4 p-5 bg-orange-600'>
    <Link to="/" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Log-in</Link>
    </nav>
    :
      <nav className='flex sm:justify-center sm:space-x-10 p-5 bg-orange-600'>
          <Link to="/provider" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Providers</Link>
          <Link to="/inventory" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Inventory</Link>
          <Link to="/receipt" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Receipts</Link>
          <Link to="/bills" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Bills</Link>
          <Link to="/generateBill" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Generate Bill</Link>

      </nav>
    }
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/provider" element={<Providers />}/>
            <Route path="/inventory" element={<Inventory />}/>
            <Route path="/receipt" element={<Receipts />}/>
            <Route path="/bills" element={<Bills />}/>
            <Route path="/generateBill" element={<GenerateBill/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
