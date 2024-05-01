import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import React from 'react';
import PaquetesPage from './pages/PaquetesPage';
import MainLayout from './layouts/MainLayout';
import Settings from './pages/settings/Settings';
import LogIn from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import PaquetePage, { paqueteLoader } from './pages/PaquetePage';
import { CarritoProvider } from './components/carritoContext';
import Carrito from './components/Carrito';
import PayScreen from './components/PayScreen';


const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<PaquetesPage />} />
          <Route path='/paquetes/:id' element={<PaquetePage />} loader={paqueteLoader}/>
          <Route path='/sobre-nosotros' element={<PaquetesPage />} />
          <Route path='/carrito-compras' element={<Carrito/>} />
          <Route path='/pagar' element={<PayScreen/>} />
          <Route path='/settings' element={<Settings/>} />
        </Route>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
      </>
    )
  );

  return (
    <CarritoProvider> {/* Aquí envuelve tu App con CarritoProvider */}
      <RouterProvider router={router} />
    </CarritoProvider>
  );
};

export default App;
