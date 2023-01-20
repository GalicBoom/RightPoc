import React from 'react'
import { BaseLink, useRoute } from 'react-router5'
import { Link } from 'react-router5';
import { Topbar_nav } from '../styles/styles';

function Topbar() {
  const { router } = useRoute();

  return (
    <Topbar_nav>
      <h1>POC</h1>
      <div>
      <ul>
        <li>
        <BaseLink router={router} routeName="home" >HOME</BaseLink>
        </li>
        <li>
        <Link routeName="teste">TESTE</Link>
        </li>
      </ul>
      </div>
    </Topbar_nav>
  )
}

export default Topbar