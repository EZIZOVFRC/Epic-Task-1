
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
return (
    <nav>
      
            <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp" alt=""  />
            <ul className='col-4 center' >
                <li><Link to={'/'}>Home</Link></li>
                <li><Link>Shop</Link></li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <div className="right col-4">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-heart"></i>
            <button><Link to={'/basket'}><i class="fa-solid fa-cart-shopping"></i></Link></button>
            </div>

       
    </nav>
)
}

export default Header
                            