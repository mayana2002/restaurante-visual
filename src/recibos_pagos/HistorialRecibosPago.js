import React from 'react'

export default function HistorialRecibosPago() {
    return (
        <div className='container'>
            <div className='container text-center' style={{margin : "30px"}}>
                <h3>Cuentas</h3>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Nombre completo</th>
                        <th scope="col">Celular</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">10014215454</th>
                        <td>Mark Gasol Villada</td>
                        <td>Otto</td>
                        <td>Iconos</td>
                    </tr>
                    <tr>
                        <th scope="row">24234234234</th>
                        <td>Jacob Gonzalez Velasquez</td>
                        <td>Thornton</td>
                        <td>Iconos</td>
                    </tr>
                    <tr>
                        <th scope="row">3234234234234</th>
                        <td>Larry the Bird</td>
                        <td>Thornton</td>
                        <td>Iconos</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}