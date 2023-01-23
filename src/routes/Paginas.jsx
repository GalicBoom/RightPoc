import React from 'react'
import { useRouteNode } from 'react-router5'
import Detalhes from '../pages/Detalhes';
import Home from '../pages/Home';
import NovoPost from '../pages/NovoPost';
import Recoil from '../pages/Recoil';

function Paginas() {

    const {route} = useRouteNode('');
    const topRouteName = route.name.split('.')[0];

    if(topRouteName === 'home'){
        return <Home/>
    }

    if(topRouteName === 'recoil'){
        return <Recoil/>
    }

    if(topRouteName === 'novopost'){
      return <NovoPost/>
    }

    if(topRouteName === 'detalhe'){
      return <Detalhes/>
    }

  return (
    <div>not found</div>
  )
}

export default Paginas