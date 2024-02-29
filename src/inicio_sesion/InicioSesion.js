import React from 'react'
import "../index.css"
import { useState } from 'react'
import query from '../api/AxiosFile.js'
import { useNavigate } from 'react-router-dom';

export default function InicioSesion() {
    const [showPassword, setShowPassword] = useState(false);
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await query.get(`/usuario/inicio-sesion/${correo}/${password}`);
            
            if (response.data) {
                // La autenticación fue exitosa
                navigate('/');
                
                console.log('Inicio de sesión exitoso');
            } else {
                setError('Usuario o contraseña incorrectos');
                // La autenticación falló
                console.log('Inicio de sesión fallido');
            }
        } catch (error) {
            setError('Usuario o contraseña incorrectos');
            console.error('Error al iniciar sesión', error);
        }
    };

    return (
        <div className="wrapper bg-white">
            <div className="h2 text-center">Bienvenido</div>
            <div className="h4 text-muted text-center pt-2">Ingresa tus datos de inicio de sesión</div>
            <form className="pt-3">
                <div className="form-group py-2">
                    <div className="input-field">
                        <span className="far fa-user p-2"></span> 
                        <input type="text" placeholder="Correo electrónico" className="" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </div>
                </div>
                <div className="form-group py-1 pb-2">
                    <div className="input-field">
                        <span className="fas fa-lock p-2"></span> <input type={showPassword ? "text" : "password"} placeholder="Contraseña" className="" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="btn bg-white text-muted" onClick={togglePasswordVisibility}>
                            <span className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></span>
                        </button>
                    </div>
                </div>
                <div className="text-center my-3">
                    <button class="btn btn-block" onClick={handleLogin}>Ingresar</button>
                </div>
                {error && <div className="text-center text-danger">{error}</div>}
                <div className="h3 text-muted text-center pt-2">¿Tienes problemas para iniciar sesión?</div>
                <div className="h3 text-muted text-center pt-2"> <a href="#" id="forgot">Recuperar Usuario o Contraseña</a> </div>
            </form>
        </div>
    )
}