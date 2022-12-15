import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Home = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy Victor Robles y soy <strong>Desarrollador Web</strong> en Madrid, y ofrezco mis servicios de <strong>programacion</strong> y <strong>desarrollo</strong> en todo tipo de proyectos web
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicacion web, tener mas visiblidad y relevancia en internet. <Link to="/contact">Contacta conmigo.</Link>
      </h2>

      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>

        <div className='works'>
          <ListadoTrabajos />
        </div>
      </section>
    </div>
  )
}
