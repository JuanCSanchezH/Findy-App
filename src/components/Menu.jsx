import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// Aqui mismo pueden implementar un modal de agregar publicacion

const Menu = () => {
  return (
    <div>
      <Outlet />
      <button><Link to='/feed'>To feed</Link></button>
      <br/>
      <button><Link to='/profile'>To profile</Link></button>
      <br/>
      <button><Link to='/post/1'>To post 1</Link></button>
    </div>
  )
}

export default Menu