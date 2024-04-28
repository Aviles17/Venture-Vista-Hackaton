import { useState } from 'react'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import PaquetesPage from './pages/PaquetesPage'
import MainLayout from './layouts/MainLayout'
import Settings from './pages/settings/Settings'
import LogIn from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

import PaquetePage, {paqueteLoader} from './pages/PaquetePage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<PaquetesPage />} />
        <Route path='/paquetes/:id' element={<PaquetePage />} loader={paqueteLoader}/>
        <Route path='/sobre-nosotros' element={<PaquetesPage />} />
        <Route path='/carrito-compras' element={<PaquetesPage />} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/registro' element={<SignUp/>}/>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
