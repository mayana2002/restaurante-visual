import React from 'react'

export default function CrearUsuario() {
    return (
        <div className='container'>
            <div class="wrapper bg-white">
                <div class="h2 text-center">Crear Usuario</div>
                <div class="h4 text-muted text-center pt-2">Ingresa los datos para crear el usuario</div>
                <form class="pt-3">
                    <div class="form-group py-2">
                        <div class="input-field">
                            <input type="text" placeholder="Nombre completo" class="" />
                        </div>
                    </div>
                    <div class="form-group py-2">
                        <div class="input-field">
                            <input type="text" placeholder="Documento de identidad" class="" />
                        </div>
                    </div>
                    <div class="form-group py-2">
                        <div class="input-field">
                            <input type="text" placeholder="Correo eletrónico" class="" />
                        </div>
                    </div>
                    <div class="form-group py-2">
                        <div class="input-field">
                            <input type="text" placeholder="Celular" class="" />
                        </div>
                    </div>
                    <div class="form-group py-2">
                        <div class="input-field">
                            <input type="text" placeholder="Dirección" class="" />
                        </div>
                    </div>
                    <div class="form-group py-2">
                        <div class="input-field">
                            <label htmlFor='rol'>Rol:</label>
                            <select id='rol' className='form-control'>
                                <option>Seleccinar</option>
                                <option>Cajero(a)</option>
                                <option>Vendedor(a)</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group py-1 pb-2">
                        <div className="input-field">
                            <input type="password" placeholder="Contraseña" className="" />
                        </div>
                    </div>
                    <div class="form-group py-1 pb-2">
                        <div className="input-field">
                            <input type="password" placeholder="Repetir Contraseña" className="" />
                        </div>
                    </div>
                    <div className="text-center my-3">
                        <button class="btn btn-block">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}