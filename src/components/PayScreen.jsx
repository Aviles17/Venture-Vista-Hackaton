import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useCarrito } from './carritoContext';

const PayScreen = () => {
    const nav = useNavigate();
    const { carrito, limpiarCarrito } = useCarrito();
    const [datos, setDatos] = useState({
        numeroTarjeta: '',
        nombreTitular: '',
        fechaExpiracion: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Eliminar los guiones antes de actualizar el estado
        const newValue = value.replace(/-/g, '');
        setDatos(prevDatos => ({
            ...prevDatos,
            [name]: newValue
        }));
    };

    const handleKeyPress = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        // Permitir solo números (códigos de caracteres entre 48 y 57 son dígitos)
        if (charCode < 48 || charCode > 57) {
            e.preventDefault();
        }
    };

    const formatNumeroTarjeta = (numero) => {
        // Insertar un guión después de cada conjunto de 4 números
        return numero.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para procesar los datos de la tarjeta
        console.log('Datos de la tarjeta:', datos);
    };

    const handlePay = () => {
        toast.success('Compra realizada con éxito');
        limpiarCarrito(); // Limpiar el carrito después de realizar la compra
        nav('/'); // Redirigir a la página principal
    };
    return (
        <div className="container mx-auto px-4 py-8 max-w-md bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Ingrese los datos de su tarjeta</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-blue-800 mb-2">Número de Tarjeta:</label>
                    <input type="text"
                        name="numeroTarjeta"
                        value={formatNumeroTarjeta(datos.numeroTarjeta)}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress} // Validar solo números
                        maxLength="19" // Máximo 19 caracteres con guiones
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                        className="w-full px-3 py-2 rounded border-blue-400 focus:outline-none focus:border-blue-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-blue-800 mb-2">Nombre del Titular:</label>
                    <input type="text" name="nombreTitular" value={datos.nombreTitular} onChange={handleChange} className="w-full px-3 py-2 rounded border-blue-400 focus:outline-none focus:border-blue-600" />
                </div>
                <div className="mb-4">
                    <label className="block text-blue-800 mb-2">Fecha de Expiración:</label>
                    <DatePicker
                        selected={datos.fechaExpiracion}
                        onChange={(date) => setDatos(prevDatos => ({ ...prevDatos, fechaExpiracion: date }))}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        className="w-full px-3 py-2 rounded border-blue-400 focus:outline-none focus:border-blue-600"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-blue-800 mb-2">CVV:</label>
                    <input type="text" name="cvv" value={datos.cvv} onChange={handleChange} className="w-full px-3 py-2 rounded border-blue-400 focus:outline-none focus:border-blue-600" placeholder='XXX' maxLength="3" onKeyPress={handleKeyPress} />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlePay}>Realizar Compra</button>
            </form>
        </div>
    );
};

export default PayScreen;
