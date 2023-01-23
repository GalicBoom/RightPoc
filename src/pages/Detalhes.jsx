import React from 'react'
import { Fetch_line } from '../styles/styles'
import { useRouteNode } from 'react-router5'

function Detalhes() {

  const { route } = useRouteNode('home')

  return (
    <div>
    <h1>Titulo: {route.params.title}</h1>
    <h2>Corpo: {route.params.body}</h2>
    <button>Deletar</button>
    <Fetch_line/>
   </div>
  )
}

export default Detalhes