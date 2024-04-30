import React from 'react'
import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import colombiaImage from '../assets/images/colombia.jpg'

const PaqueteTarjeta = ({paquete}) => {
    return (
        <div className='bg-white rounded-xl shadow-md relative'>
          <div className='p-4'>
            <div className='mb-6'>
              <h3 className='text-xl font-bold'>{paquete.nombreLugarTuristico}</h3>
            </div>
    
            <div className='mb-5'>
              <img src={colombiaImage} alt="Colombia" className="w-full h-auto mb-5" />
            </div>
    
            <h3 className='text-indigo-500 mb-2'>{paquete.precio}</h3>
    
            <div className='border border-gray-100 mb-5'></div>
    
            <div className='flex lg:flex-row justify-between mb-4'>
              <Link
                to={`/paquetes/${paquete.id}`}
                className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
              >
                ver más
              </Link>

              <Link
                to={`/paquetes/${paquete.id}`}
                className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
              >
                Añadir
              </Link>
            </div>
          </div>
        </div>
      )
}

export default PaqueteTarjeta