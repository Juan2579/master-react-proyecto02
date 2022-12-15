import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Proyect = () => {

  const {id} = useParams()

  const [proyecto, setProyecto] = useState({})

  useEffect(() => {
    const proyecto = trabajos.filter(trabajo => trabajo.id === id)

    setProyecto(proyecto[0])
  }, [])

  return (
    <div className='page page-work'>
      <img src={"/images/"+proyecto.id+".png"} alt="" />
      <h1 className='heading'>{proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
      <a href={"https://"+proyecto.url} target="_blank">Ir al proyecto</a>
    </div>
  )
}
