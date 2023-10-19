import React from 'react'
import { Outlet } from 'react-router-dom'
// Aqui mismo pueden implementar un modal de agregar publicacion

const Menu = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Menu