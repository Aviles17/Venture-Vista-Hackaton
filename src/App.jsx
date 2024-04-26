import { useState } from 'react'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import PaquetesPage from './pages/PaquetesPage'
import MainLayout from './layouts/MainLayout'
import PaquetePage, {paqueteLoader} from './pages/PaquetePage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<PaquetesPage />} />
        <Route path='/paquetes/:id' element={<PaquetePage />} loader={paqueteLoader}/>
        <Route path='/sobre-nosotros' element={<PaquetesPage />} />
        <Route path='/carrito-compras' element={<PaquetesPage />} />
        <Route path='/perfil' element={<PaquetesPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
