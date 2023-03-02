import './Header.scss';
import search from '../../assets/img/search.png'
import shop from '../../assets/img/shopping_cart.png'
import { useState } from 'react';
function Header() {
    const [open, setOpen] = useState(false)
    const handlerRef = ()=> {
        setOpen(!open)
    }
    open ? document.querySelector('body').style.background = '#052222' : document.querySelector('body').style.background = 'none'
    return (
        <header>
            <nav className={open ? 'modal nav' : 'nav'}>
           <div className='container nav-inner'>
                <ul className="list">
                    <li className="item">
                        <a className='link' href="#Home">Home</a>
                        <a className='link' href="#About">About</a>
                        <a className='link' href="#Blog">Blog</a>
                        <a className='link' href="#Contact">Contact</a>
                        <a className='link' href="#Courses">Courses</a>
                        <div className="search">
                            <img src={search} alt="" />
                            <a className='search-link' href="#search">Search</a>
                        </div>
                        <div className='shopping'>
                            <img src={shop} alt="" />
                            <a className='shopping-link' href="cart">Cart</a>
                        </div>
                        <button className='sig'>Sign Up</button>
                        <button className={open ? 'mod-btnn' : 'mod-btn'} onClick={handlerRef }>Mode</button>
                    </li>
                </ul>
           </div>
        </nav>
        </header>
    )
}

export default Header;