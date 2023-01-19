import React from 'react'
import { useRouteNode } from 'react-router5'
import Home from './Home';
import Teste from './Teste';

function Paginas() {

    const {route} = useRouteNode('');
    const topRouteName = route.name.split('.')[0];

    if(topRouteName === 'home'){
        return <Home/>
    }

    if(topRouteName === 'teste'){
        return <Teste/>
    }

  return (
    <div>not found</div>
  )
}

export default Paginas