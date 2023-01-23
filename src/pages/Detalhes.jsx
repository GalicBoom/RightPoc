import React from 'react'
import { useRoute, useRouteNode } from 'react-router5'

function Detalhes() {

  const { route } = useRouteNode('home')
  const {router} = useRoute();

  const deleteData = () => {

    fetch('https://jsonplaceholder.typicode.com/posts/'+route.params.id, {
      method: 'DELETE',
    });

    router.navigate('home');

      }

  return (
    <div>
    <h1>Titulo: {route.params.title}</h1>
    <h2>Corpo: {route.params.body}</h2>
    <button onClick={() => deleteData()}>Deletar</button>
   </div>
  )
}

export default Detalhes