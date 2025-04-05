import React from 'react'
import Home from '../pages/Home'
import Categoria from '../pages/Categoria'
import Preguntas from '../pages/Preguntas'
import Contacto from '../pages/Contacto'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBbar'
import Talles from '../pages/Talles'

const DashboardRoutes = () => {
  return (
    <>
        <NavBar/>
            <Header/>
            <br />

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
            <Footer/>
        </>
  )
}

export default DashboardRoutes