import React from 'react'
import { Link } from 'react-router-dom'
import imgMenu from '../assets/menu.png'
import imgCuentas from '../assets/cuentas.png'
import imgCompras from '../assets/registro.png'
import imgRecibos from '../assets/historial.png'
import imgProveedores from '../assets/proveedores.png'

export default function Navegacion() {
    return (
        <div className='container'>
            <div className='wrapper bg-white' style={{maxWidth: "1300px"}}>
            <div class="h2 text-center">Hola, Administrador</div>
            <div className="row">
                <div className="col-sm-3 mb-3 mb-sm-3">
                    <div className="card" style= {{width: "14rem"}}>
                        <img src={imgCompras} alt='Menu'/>
                        <div className="card-body">
                            <button class="btn btn-block">Ir a Registrar compra</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style= {{width: "14rem"}}>
                     <img src={imgRecibos} alt='Menu'/> 
                        <div className="card-body">
                            <button class="btn btn-block">Ir a Recibos de Pago</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                <div className="card" style= {{width: "14rem"}}>
                        <img src={imgMenu} alt='Menu'/> 
                        <div className="card-body">
                            <button class="btn btn-block">Ir a Menú</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                <Link to='/cuentas'>
                    <div className="card" style= {{width: "14rem"}}>
                        <img src={imgCuentas} alt='Menu'/> 
                        <div className="card-body">
                            <button class="btn btn-block">Ir a Cuentas</button>
                        </div>
                    </div>
                </Link>
                </div>
                <div className="col-sm-3">
                    <Link to='/proveedores'>
                        <div className="card" style= {{width: "14rem"}}>
                        <img src={imgProveedores} alt='Menu'/> 
                            <div className="card-body">
                                <button class="btn btn-block">Ir a Proveedores</button>
                            </div>
                        </div>
                    </Link>  
                </div>
            </div>
            </div>
            
        </div>
    )
}