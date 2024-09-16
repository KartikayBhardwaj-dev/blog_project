import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'

import Contact from './Components/Contact/Contact.jsx'
import Blog from './Components/BlogPost/BlogPost.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import SignIn from './Components/SignIn/SignIn.jsx'
import EmailSignUp from './Components/EmailSignUp/EmailSignUp.jsx'
import GoogleSignUp from './Components/GoogleSignUp/GoogleSignUp.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/about' element={<About/>}/>
      
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blogpost' element={<Blog/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/email' element={<EmailSignUp/>}/>
      <Route path='/google' element={<GoogleSignUp/>}/>

    </Route>


  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
