import React from 'react'
import { useRouteNode } from 'react-router5'
import Home from '../pages/Home';
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

  return (
    <div>not found</div>
  )
}

export default Paginas