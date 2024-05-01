import { useState, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import paquetes from '../assets/paquetes.json'
import { FaArrowLeft, FaClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import colombiaImage from '../assets/images/colombia.jpg'
import profile from '../assets/images/blank-profile.png'
import { useCarrito } from '../components/carritoContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaquetePage = () => {
  const { id } = useParams()
  const paquete = useLoaderData()
  const { carrito, agregarAlCarrito } = useCarrito();
  const handleClick = () => {
    agregarAlCarrito(paquete);
    toast.success('Añadido al carrito');
  };

  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Otros paquetes
          </Link>
        </div>
      </section>

      <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <h1 className='text-3xl font-bold mb-4'>{paquete.nombreLugarTuristico}</h1>
                <img src={colombiaImage} alt="Colombia" className="w-full h-auto mb-5" />


                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start '>
                  <FaClock className='text-orange-700 mr-1' />
                  <p className='text-orange-700 text-lg mr-10'>{paquete.dias}</p>

                  <div className='flex items-center mb-4'>
                    <span className='text-gray-500 ml-2 mr-3'>{paquete.calificacion}</span>
                    <span className='text-yellow-500 flex flex-row'>
                      {Array.from({ length: paquete.calificacion }, (_, index) => (
                        <svg
                          key={index}
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 fill-current'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 15.585l-6.95 3.358 1.33-7.31L.29 6.057l7.36-1.07L10 .715l2.35 4.272 7.36 1.07-5.09 4.576 1.33 7.31z'
                            clipRule='evenodd'
                          />
                        </svg>
                      ))}
                    </span>
                  </div>
                </div>



              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                  Descripcion paquete
                </h3>

                <p className='mb-4'>{paquete.descripcionLugar}</p>

                <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                  Precio
                </h3>

                <p className='mb-4'>{paquete.precio}</p>
              </div>
            </main>


            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Comentarios</h3>
                <form>
                  {paquete.comentarios.map((comentarioX, index) => (
                    <div key={index} className="border rounded-md p-3 ml-3 my-3">
                      <div className="flex gap-3 items-center">
                        <img
                          src={profile}
                          alt="profile"
                          className="object-cover w-8 h-8 rounded-full border-2 border-emerald-400 shadow-emerald-400"
                        />
                        <h3 className="font-bold">{comentarioX.usuario}</h3>
                      </div>
                      <p className="text-gray-600 mt-2">{comentarioX.comentario}</p>
                    </div>
                  ))}
                </form>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                
                <button className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                  onClick={handleClick}
                >
                  Añadir
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

const paqueteLoader = async ({ params }) => {
  return paquetes.find(paquete => paquete.id === Number(params.id))
}

export { PaquetePage as default, paqueteLoader }