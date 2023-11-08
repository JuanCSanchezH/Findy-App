import React from 'react'
import { Link } from 'react-router-dom';
import '../SASS/styleLogin/login.scss'

const Register = () => {
  return (
    <>
      <main>
        <form className='form-container-2'>
          <div class="container-form-2">
            <h2 className='login-title'>Register</h2>
              
                <div class="name-details">
                  <div class="field input">
                      <h6>Name</h6>
                      <input id="name" type="text" placeholder="Enter your Name" />
                  </div>
                  <div class="field input">
                      <h6>Last Name</h6>
                      <input id="lastName" type="text" placeholder="Enter your Last Name" />
                  </div>
                  <div class="field input">
                      <h6>Gmail</h6>
                      <input id="gmail" type="text" placeholder="Enter your Gmail" />
                  </div>
                  <div class="field input">
                      <h6>Password</h6>
                      <input id="password" type="password" placeholder="Enter your new Password" />
                  </div>
                  <div class="field image">
                      <h6>Profile Picture</h6>
                      <input id="img" type="file"/>
                  </div>
                  <div class="button">
                      <button type='submit'>Check in</button>
                  </div>
                </div>
              <div className='link'>Do you already have an account? <Link className='link-2' to={'/login'}>Sign Up</Link></div>
          </div>
        </form>
      </main>
    </>
  )
}

export default Register