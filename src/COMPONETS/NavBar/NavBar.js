import './NavBar.css'
import React from 'react'

function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
        <ul className='pages'>
          <li><h5>Home</h5></li>
          <li><h5 className='gray'>Tv Show</h5></li>
        </ul>
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
    </div>
  )
}

export default NavBar