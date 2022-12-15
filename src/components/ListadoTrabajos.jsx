import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const ListadoTrabajos = () => {
  return (
    <section className='works'>
      {
        trabajos.map(trabajo => {
          return (
            <article className='work-item' key={trabajo.id}>
              <div className='mask'>
                <img src={"/images/"+trabajo.id+".png"} alt="" />
              </div>
              <span>{trabajo.categorias}</span>
              <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>
          )
        })
      }
    </section>
  )
}
