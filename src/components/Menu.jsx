import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../SASS/styleMenu/menu.scss'
// Aqui mismo pueden implementar un modal de agregar publicacion

const Menu = () => {

/*   const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    // Aqui se hace la logica para guardarlo en bd.json
    closeModal();
  }; */

  return (
    <div>
      <Outlet />
      <button><Link to='/post/1'>To post details</Link></button>
      <div className="menu-container">
        <div className='circle'>
          <button className='new-post'  /* onClick={openModal} */>
            <img className="img-suma" src="https://api.iconify.design/material-symbols:add-rounded.svg" alt="" />
          </button>
        </div>

        <div className="image-button-container">
          <img
            className="img-container"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/652ee33c0ee07e8626b548f7/releases/65444a93f237bfedbca6e6a5/img/rectangle-60.svg"
          />
          <div className="button-container">
            <button>
              <Link to='/feed'>
                <img src="https://api.iconify.design/mdi:home.svg" alt="" />
              </Link>
            </button>
            <button>
              <Link to='/post/1'>
                <img src="https://api.iconify.design/ph:magnifying-glass-bold.svg" alt="" />
              </Link>
            </button>
          </div>
        </div>
        
        <div className="button-container-2">
          <button>
            <Link to=''>
              <img src="https://api.iconify.design/material-symbols:notifications.svg" alt="" />
            </Link>
          </button>
          <button>
            <Link to='/profile'>
              <img src="https://cdn.animaapp.com/projects/652ee33c0ee07e8626b548f7/releases/65444a93f237bfedbca6e6a5/img/ellipse-13@2x.png" alt="" />
            </Link>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Menu