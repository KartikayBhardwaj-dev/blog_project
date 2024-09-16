import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Components/Home/Home"
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import CustomNavbar from './Components/Navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CustomNavbar/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>  
          <Route path='/home' element={<Home/>}/>  


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
