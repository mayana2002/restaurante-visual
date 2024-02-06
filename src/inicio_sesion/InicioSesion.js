import React from 'react'
import "../index.css"
import { useState } from 'react'

export default function InicioSesion() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };
    return (
        <div class="wrapper bg-white">
            <div class="h2 text-center">Bienvenido</div>
            <div class="h4 text-muted text-center pt-2">Ingresa tus datos de inicio de sesión</div>
            <form class="pt-3">
                <div class="form-group py-2">
                    <div class="input-field">
                        <span class="far fa-user p-2"></span> 
                        <input type="text" placeholder="Usuario" class="" />
                    </div>
                </div>
                <div class="form-group py-1 pb-2">
                    <div className="input-field">
                        <span className="fas fa-lock p-2"></span> <input type={showPassword ? "text" : "password"} placeholder="Contraseña" className="" />
                        <button className="btn bg-white text-muted" onClick={togglePasswordVisibility}>
                            <span className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></span>
                        </button>
                    </div>
                </div>
                <div className="text-center my-3">
                    <button class="btn btn-block">Ingresar</button>
                </div>
                <div class="h3 text-muted text-center pt-2">¿Tienes problemas para iniciar sesión?</div>
                    
                <div class="h3 text-muted text-center pt-2"> <a href="#" id="forgot">Recuperar Usuario o Contraseña</a> </div>
            </form>
        </div>
    )
}