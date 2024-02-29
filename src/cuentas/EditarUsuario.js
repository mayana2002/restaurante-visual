import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import query from '../api/AxiosFile.js';

export default function EditarUsuario() {
    const { numeroDocumento } = useParams();
  const [usuario, setUsuario] = useState({
    nombre: '',
    numeroDocumento: '',
    correo: '',
    telefono: '',
    direccion: '',
    rol: '0',
    password: '',
  });

  useEffect(() => {
    // Cargar los datos del usuario al montar el componente
    query.get(`/usuario/listar/${numeroDocumento}`)
      .then(resp => resp.data)
      .then(usuario => setUsuario(usuario))
      .catch(err => console.log(err));
  }, [numeroDocumento]);

  const handleChange = (e) => {
    // Actualizar el estado del formulario cuando cambian los campos
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };
  const [usuarioInsertado, setUsuarioInsertado] = useState(false);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar la solicitud para editar el usuario en el backend
    // Puedes utilizar axios o el método que estés utilizando en tu aplicación
    
    query.put(`/usuario/actualizar/${numeroDocumento}`, usuario)
      .then(resp => {
        // Manejar la respuesta, por ejemplo, redirigir a la página de Perfiles
        handleUsuarioInsertado();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='container'>
            <div className="wrapper bg-white">
                <div className="h2 text-center">Editar Usuario</div>
                <div className="h4 text-muted text-center pt-2">Ingresa los datos para editar el usuario</div>
                <form className="pt-3" onSubmit={handleSubmit}>
                <div className="form-group py-2">
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder="Nombre completo" 
                                className=""
                                name="nombre"
                                value={usuario.nombre}
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}   
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange} 
                            />
                        </div>
                    </div>
                    <div className="text-center my-3">
                        <button className="btn btn-block">Editar</button>
                    </div>
                </form>
                {usuarioInsertado && (
                    <div className="alert alert-success" role="alert">
                        Usuario editado exitosamente.
                    </div>
                    )}
            </div>
        </div>
  )
}
