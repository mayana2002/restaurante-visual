import React from 'react'
import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import { useState } from "react"
import { FilterMatchMode } from 'primereact/api'
import { InputText } from 'primereact/inputtext'

export default function Proveedores() {
    const [filters, setFilters] = useState({
        global: {value : null, matchMode: FilterMatchMode.CONTAINS},
    })

    const data = [
        {
            id: "4545454545",
            nombre: "Julian Velasquez",
            empresa: "Probando",
            celular: "65454545454545",
            acciones: "acciones"
        },
        {
            id: "14324324234",
            nombre: "Martino Lanzaro",
            empresa: "Mecato",
            celular: "9844454412",
            acciones: "acciones"
        },
        {
            id: "567657567",
            nombre: "Marcado Mecilla",
            empresa: "Oho",
            celular: "67587686867",
            acciones: "acciones"
        },
        {
            id: "99666522",
            nombre: "Ana Maria Cer",
            empresa: "Jirlas",
            celular: "0203300440404",
            acciones: "acciones"
        },
        {
            id: "99666522",
            nombre: "Olga Lucia Jimenez",
            empresa: "Mercadona",
            celular: "865876867876876",
            acciones: "acciones"
        },
        {
            id: "0023949494",
            nombre: "Probando Ando",
            empresa: "Alucinando",
            celular: "432543534534",
            acciones: "acciones"
        }
    ]
    return (
        <div className='container'>
            <div className='wrapper bg-white' style={{maxWidth: "1300px"}}>
                <div className='h2 text-center'>
                    Proveedores
                </div>
                <Link to='/crear-proveedor'>
                    <div className='text-center my-3'>
                        <button className='btn btn-block'>
                            Crear Proveedor
                        </button>
                    </div>
                </Link>
                <div className='form-group py-2'>
                    <div className='input-field'>
                        <InputText
                            onInput={(e) => 
                                setFilters({
                                    global: {value: e.target.value, matchMode: FilterMatchMode.CONTAINS},
                                })}
                                placeholder='Buscar proveedores'
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
                <Column field='empresa' header='Empresa' sortable/>
                <Column field='celular' header='Celular' sortable/>
                <Column field='acciones' header='Acciones' />
            </DataTable>
            </div>
        </div>
    )
}