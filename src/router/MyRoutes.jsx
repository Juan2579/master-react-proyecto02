import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Contact } from '../components/Contact'
import { Curriculum } from '../components/Curriculum'
import { Home } from '../components/Home'
import { Footer } from '../components/layout/Footer'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      { /* HEADER Y NAVEGACION */}
      <HeaderNav />

      { /* CONTENIDO CENTRAL */}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </section>

      { /* FOOTER */}
      <Footer />
    </BrowserRouter>
  )
}
