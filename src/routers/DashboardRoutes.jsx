import React from 'react'
import Home from '../pages/Home'
import Categoria from '../pages/Categoria'
import Preguntas from '../pages/Preguntas'
import Contacto from '../pages/Contacto'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Talles from '../pages/Talles'
import ButtonIg from '../components/ButtonIg'
import ButtonWp from '../components/ButtonWp'
import prodImg from '../../public/img/productos.png'
import stockImg from '../../public/img/stock.png'
import estamosImg from '../../public/img/estamos.png'
import tallesImg from '../../public/img/talles.png'
import Design from '../pages/Design'
import OtrosProductos from '../pages/OtrosProductos'
import Clientes from '../pages/Clientes'

const DashboardRoutes = () => {
    return (
        <div className=''>

            <Header />
            <div className='sub-header '>

                <div className='sub-header-content'>
                <div className="img-sub-header">
                    <img src={prodImg} alt="prod" />
                    <h6 className='text-danger'>PRODUCTOS</h6>
                </div>
                <div className="img-sub-header">
                <img src={stockImg} alt="stock" />
                <h6 className='text-danger'>STOCK</h6>
                </div>
                <div className="img-sub-header">
                <img src={estamosImg} alt="estamos" />
                <h6 className='text-danger'>ESTAMOS</h6>
                </div>
                <div className="img-sub-header">
                <img src={tallesImg} alt="talles" />
                <h6 className='text-danger'>TALLES</h6>
                </div>
                </div>
            
            </div>
            <ButtonIg />
            <br />

            <br />
            <ButtonWp />

            <div>

                <Routes>
                    <Route path="/inicio"
                        element={<Home />}
                    />
                    <Route exact path="/preguntas"
                        element={<Preguntas />}
                    />
                    <Route exact path="/categoria"
                        element={<Categoria />}
                    />
                    <Route exact path="/talles"
                        element={<Talles />}
                    />
                    <Route exact path="/diseno"
                        element={<Design />}
                    />
                    <Route exact path="/otrosproductos"
                        element={<OtrosProductos />}
                    />
                    <Route exact path="/clientes"
                        element={<Clientes />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/inicio" replace />}
                    />
                </Routes>
                <br />
            </div>
            <Footer />
        </div>
    )
}

export default DashboardRoutes