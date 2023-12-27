import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>
            IStore
        </h1>
        <ul>
            <li>
                Mac
            </li>
            <li>
                IPhone
            </li>
            <li>
                iPad
            </li>
        </ul>

        < CartWidget/>
        
    </header>
  )
}

export default NavBar