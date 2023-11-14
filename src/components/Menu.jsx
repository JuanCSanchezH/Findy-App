import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// Aqui mismo pueden implementar un modal de agregar publicacion

const Menu = () => {
  return (
    <div>
      <Outlet />
      <button><Link to='/post/1'>To post details</Link></button>
    </div>
  )
}

export default Menu