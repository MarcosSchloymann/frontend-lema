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

const DashboardRoutes = () => {
  return (
    <div className=''>

            <Header/>
            {/* <ButtonIg/>
            <br />
            <br />
            <br />
            <ButtonWp/>
           
            <div>
                <Routes>
                    <Route path="/inicio"
                        element={<Home/>}
                    />
                    <Route exact path="/categorias"
                        element={<Categoria/>}
                    />
                    <Route exact path="/preguntas"
                        element={<Preguntas/>}
                    />
                    <Route exact path="/contacto"
                        element={<Contacto/>}
                    />
                    <Route exact path="/talles"
                        element={<Talles/>}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/inicio" replace />}
                    />
                </Routes>
                <br />
            </div>
            <Footer/> */}
        </div>
  )
}

export default DashboardRoutes