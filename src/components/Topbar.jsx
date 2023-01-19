import React from 'react'
import { BaseLink, useRoute } from 'react-router5'
import { Link } from 'react-router5';

function Topbar() {
  const { router } = useRoute();

  return (
    <TopBar>
      <h2>POC</h2>
      <div>
      <ul>
        <li>
        <BaseLink router={router} routeName="home" routerOptions={{reload:true}}>HOME</BaseLink>
        </li>
        <li>
        <Link routeName="teste">TESTE</Link>
        </li>
      </ul>
      </div>
    </TopBar>
  )
}

export default Topbar