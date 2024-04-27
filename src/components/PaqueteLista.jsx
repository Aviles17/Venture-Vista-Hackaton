import React from 'react'
import paquetes from '../assets/paquetes.json'
import PaqueteTarjeta from './PaqueteTarjeta'

const PaqueteLista = () => {
    return (
        <section className='bg-blue-50 px-4 py-10'>
          <div className='container-xl lg:container m-auto'>
            <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
              Paquetes Turisticos
            </h2>
    
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {paquetes.map((paquete) => (
                    <PaqueteTarjeta key={paquete.id} paquete={paquete} />
                ))}
            </div>
        
          </div>
        </section>
      )
}

export default PaqueteLista