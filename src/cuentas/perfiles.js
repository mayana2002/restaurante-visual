import React from 'react'
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import { useState } from "react"
import { FilterMatchMode } from 'primereact/api'
import { InputText } from 'primereact/inputtext'
import { Link } from 'react-router-dom'

export default function Perfiles() {

    const [filters, setFilters] = useState({
        global: {value : null, matchMode: FilterMatchMode.CONTAINS},
    })

    const data = [
        {
            id: "4545454545",
            nombre: "Julian Velasquez",
            celular: "65454545454545",
            acciones: "acciones"
        },
        {
            id: "14324324234",
            nombre: "Martino Lanzaro",
            celular: "9844454412",
            acciones: "acciones"
        },
        {
            id: "567657567",
            nombre: "Marcado Mecilla",
            celular: "67587686867",
            acciones: "acciones"
        },
        {
            id: "99666522",
            nombre: "Ana Maria Cer",
            celular: "0203300440404",
            acciones: "acciones"
        },
        {
            id: "99666522",
            nombre: "Olga Lucia Jimenez",
            celular: "865876867876876",
            acciones: "acciones"
        },
        {
            id: "0023949494",
            nombre: "Probando Ando",
            celular: "432543534534",
            acciones: "acciones"
        }
    ]
    return (
        <div className='container'>
            <div className='wrapper bg-white' style={{maxWidth: "1300px"}}>
                <div className='h2 text-center'>Usuarios</div>
                <Link to='/crear-usuario'>
                    <div className="text-center my-3">
                        <button class="btn btn-block">Crear Usuario</button>
                    </div>
                </Link>
                
                <div className='form-group py-2'>
                    <div className='input-field'>
                        <InputText
                            onInput={(e) => 
                                setFilters({
                                    global: {value: e.target.value, matchMode: FilterMatchMode.CONTAINS},
                                })}
                                placeholder='Buscar usuario'
                        />
                    </div>
                </div>
            
            <DataTable value={data} sortMode='multiple' filters={filters}
                paginator
                rows={3}
                /*rowsPerPageOptions={[1,2]}*/
                totalRecords={6}
            >
                <Column field='id' header='Identificacion' sortable/>
                <Column field='nombre' header='Nombre completo' sortable/>
                <Column field='celular' header='Celular' sortable/>
                <Column field='acciones' header='Acciones' />
            </DataTable>
            </div>
        </div>
    )
}