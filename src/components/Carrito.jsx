import React from 'react';
import { useCarrito } from './carritoContext'; // Importa el contexto del carrito
import colombiaImage from '../assets/images/colombia.jpg'
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { carrito, eliminarDelCarrito } = useCarrito(); // Obtén el estado del carrito y las funciones para eliminar elementos

  // Función para contar la cantidad de cada producto en el carrito
  const contarCantidad = (idProducto) => {
    return carrito.filter(item => item.id === idProducto).length;
  };

  // Función para eliminar un producto del carrito
  const handleEliminarDelCarrito = (idProducto) => {
    eliminarDelCarrito(idProducto);
  };

  // Función para calcular el total a pagar
  const calcularTotal = () => {
    let total = 0;
    carrito.forEach(item => {
      total += parseFloat(item.precio.replace(/[^\d.-]/g, ''));
    });
    return total;
  };

  // Función para renderizar los elementos del carrito
  const renderizarCarrito = () => {
    // Agrupar los elementos del carrito por su identificador único
    const carritoAgrupado = [...new Set(carrito.map(item => item.id))];

    return (
      <ul className="grid grid-cols-2 gap-4">
        {carritoAgrupado.map((idProducto) => (
          <li key={idProducto}>
            <div className='bg-white rounded-xl shadow-md relative flex'>
              <div className="flex-1">
                <div className='p-4'>
                  <div className='mb-6'>
                    <h3 className='text-xl font-bold'>{carrito.find(item => item.id === idProducto).nombreLugarTuristico}</h3>
                  </div>

                  <div className='mb-5'>
                    <img src={colombiaImage} alt="Colombia" className="w-full h-auto mb-5 max-w-xs" />
                  </div>

                  <h3 className='text-indigo-500 mb-2'>{carrito.find(item => item.id === idProducto).precio}</h3>
                  <p>Cantidad: {contarCantidad(idProducto)}</p>
                </div>
              </div>

              <div className="flex items-center">
                <button
                  className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm block mt-4 mr-4'
                  onClick={() => handleEliminarDelCarrito(idProducto)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Link to="/" className="fixed top-0 left-0 m-4 p-2 bg-indigo-500 text-white rounded-full shadow-lg z-50">
        Retroceder
      </Link>
      {carrito.length === 0 ? (
        <p className="text-center mt-10 text-gray-500 font-bold mb-10">El carrito está vacío.</p>
      ) : (
        <>
          {renderizarCarrito()}
          <h3 className='text-xl font-bold'>Total a pagar: ${calcularTotal()}</h3>
          <div className="flex justify-center w-full">
            <Link to="/pagar" className="bg-indigo-500 hover:bg-indigo-600 text-white px-12 py-2 rounded-lg text-center text-sm inline-block mt-4 mb-7">
              Pagar
            </Link>
          </div>

        </>
      )}
    </div>
  );
};

export default Carrito;
