import React from 'react'
import { useState, useEffect } from 'react';
import './RegistroUsuario.css';

const RegistroUsuario = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');


    const cambiarTexto = (event) => {
        setNombre(event.target.value);
    }

    const cambiarApellido = (event) => {
        setApellido(event.target.value);
    }

    const cambiarCorreo = (event) => {
        setCorreo(event.target.value);
    }

    const cambiarContrasenia = (event) => {
        setContrasenia(event.target.value);
    }


    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <h2 className="mb-4">Registro de Usuario</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input
                        id="apellido"
                        type="text"
                        className="form-control"
                        value={apellido}
                        onChange={e => setApellido(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo</label>
                    <input
                        id="correo"
                        type="text"
                        className="form-control"
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="contrasenia" className="form-label">Contraseña</label>
                    <input
                        id="contrasenia"
                        type="text"
                        className="form-control"
                        value={contrasenia}
                        onChange={e => setContrasenia(e.target.value)}
                    />
                </div>

                <p>Nombre: {nombre}</p>
                <p>Nombre: {apellido}</p>
                <p>Nombre: {correo}</p>
                <p>Nombre: {contrasenia}</p>

                <button type="submit" className="btn btn-primary w-100">Registrar</button>
            </form>
        </div>
    )
}

export default RegistroUsuario