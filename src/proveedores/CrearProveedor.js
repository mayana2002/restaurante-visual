import React from 'react'

export default function CrearProveedor() {
    return (
        <div className='container'>
            <div class="wrapper bg-white" >
                <div class="h2 text-center">Crear Proveedor</div>
                <div class="h4 text-muted text-center pt-2">Ingresa los datos para crear el proveedor</div>
                <form class="pt-3">
                    <div class="form-group py-2">
                        <div class="input-field">
                            <input type="text" placeholder="Nombre completo" class="" />
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
                            <input type="text" placeholder="Empresa" class="" />
                        </div>
                    </div>
                    <div class="form-group py-2">
                        <div class="input-field">
                            <input type="text" placeholder="Teléfono empresa" class="" />
                        </div>
                    </div>
                    <div class="form-group py-2">
                        <div class="input-field">
                            <input type="text" placeholder="Dirección" class="" />
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