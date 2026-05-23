import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <div className="pt-20"></div>
     <Outlet />
    <Footer></Footer>
    </>
  )
}

export default App
