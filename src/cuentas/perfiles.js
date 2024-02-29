import React from 'react'
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import { useState, useEffect } from "react"
import { FilterMatchMode } from 'primereact/api'
import { InputText } from 'primereact/inputtext'
import { Link } from 'react-router-dom'
import query from '../api/AxiosFile.js'

export default function Perfiles() {


    const [autor, setAutor] = useState([])
    useEffect(()=>{
      query.get('/usuario/listar')
      .then(resp => resp.data)
      .then(autor => setAutor(autor))
      .catch(err => console.log(err))

    },[])
    console.log(autor)
    const [filters, setFilters] = useState({
        global: {value : null, matchMode: FilterMatchMode.CONTAINS},
    })

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
            
            <DataTable value={autor} sortMode='multiple' filters={filters}
                paginator
                rows={3}
                /*rowsPerPageOptions={[1,2]}*/
                totalRecords={6}
            >
                <Column field='numeroDocumento' header='Identificacion' sortable/>
                <Column field='nombre' header='Nombre completo' sortable/>
                <Column field='telefono' header='Celular' sortable/>
                <Column header='Acciones' body={(rowData) => (
                        <Link to={`/editar-usuario/${rowData.numeroDocumento}`}>
                            <button className="btn btn-orange">Editar</button>
                        </Link>
                    )} />
            </DataTable>
            </div>
        </div>
    )
}