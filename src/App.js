import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navegacion from './plantilla/Navegacion';
import Perfiles from './cuentas/perfiles';
import InicioSesion from './inicio_sesion/InicioSesion';
import CrearUsuario from './cuentas/CrearUsuario';
import CrearProveedor from './proveedores/CrearProveedor';
import Proveedores from './proveedores/Proveedores';

function App() {
	return (
		<div className='container'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Outlet/>}>
						<Route index element={<Navegacion/>}/>
						<Route exatc path='/cuentas' element={<Perfiles/>}/>
						<Route exatc path='/inicio-sesion' element={<InicioSesion/>}/>
						<Route exatc path='/crear-usuario' element={<CrearUsuario/>}/>
						<Route exaxt path='/crear-proveedor' element={<CrearProveedor/>}/>
						<Route exaxt path='/proveedores' element={<Proveedores/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;