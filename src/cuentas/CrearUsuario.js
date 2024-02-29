import React, { useState } from 'react'
import query from '../api/AxiosFile.js'

export default function CrearUsuario() {
    const [usuario, setUsuario] = useState({
        nombre: '',
        numeroDocumento: '',
        correo: '',
        telefono: '',
        direccion: '',
        password: '',
        rol: '1'
    });
    const [usuarioInsertado, setUsuarioInsertado] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };
    const handleUsuarioInsertado = () => {
        setUsuarioInsertado(true);
        // Limpia los campos después de mostrar el mensaje
        setUsuario({
          nombre: '',
          numeroDocumento: '',
          correo: '',
          telefono: '',
          direccion: '',
          password: '',
          rol: '0',
        });
        // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
        setTimeout(() => {
          setUsuarioInsertado(false);
        }, 4000);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await query.post('/proveedoor', usuario);
            handleUsuarioInsertado();
            console.log('Usuario creado exitosamente.');
        } catch (error) {
            console.log('Error creando usuario: ' + error.message);
        }
    };
    return (
        <div className='container'>
            <div className="wrapper bg-white">
                <div className="h2 text-center">Crear Usuario</div>
                <div className="h4 text-muted text-center pt-2">Ingresa los datos para crear el usuario</div>
                <form className="pt-3" onSubmit={handleSubmit}                                                                                                                                                                                              >
                    <div className="form-group py-2">
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder="Nombre completo" 
                                className=""
                                name="nombre"
                                value={usuario.nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group py-2">
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder="Documento de identidad" 
                                className=""
                                name="numeroDocumento"
                                value={usuario.numeroDocumento}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group py-2">
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder="Correo eletrónico" 
                                className="" 
                                name="correo"
                                value={usuario.correo}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group py-2">
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder="Celular" 
                                className=""
                                name="telefono"
                                value={usuario.telefono}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group py-2">
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder="Dirección" 
                                className="" 
                                name="direccion"
                                value={usuario.direccion}
                                onChange={handleInputChange}   
                            />
                        </div>
                    </div>
                    <div className="form-group py-2">
                        <div className="input-field">
                            <label htmlFor='rol'>Rol:</label>
                            <select 
                                id='rol' 
                                className='form-control'
                                name = 'rol'
                                value = {usuario.rol}
                                onChange={handleInputChange}
                            >
                                <option value="0">Seleccionar</option>
                                <option value="1">Cajero(a)</option>
                                <option value="2">Vendedor(a)</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group py-1 pb-2">
                        <div className="input-field">
                            <input 
                                type="password" 
                                placeholder="Contraseña" 
                                className=""
                                name = 'password'
                                value = {usuario.password}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group py-1 pb-2">
                        <div className="input-field">
                            <input 
                                type="password" 
                                placeholder="Repetir Contraseña" 
                                className=""
                                name = 'password'
                                value = {usuario.password}
                                onChange={handleInputChange} 
                            />
                        </div>
                    </div>
                    <div className="text-center my-3">
                    
                        <button className="btn btn-block">Crear</button>
                        
                    </div>
                    
                </form>
                {/* Mensaje de usuario insertado */}
        {usuarioInsertado && (
          <div className="alert alert-success" role="alert">
            Usuario insertado exitosamente.
          </div>
        )}
            </div>
        </div>
    )
}