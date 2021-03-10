import React from 'react'
import {Link} from 'react-scroll'

const NavBar = () => {
    return (
        <nav>
                <div className="links-container">
                    <ul className="links">
                        <Link to='projects' className='li' activeClass='active' spy={true} smooth={true}>
                        Projects</Link>
                        <Link to='about' className='li' activeClass='active' spy={true} smooth={true}>
                        About</Link>
                        <Link to='contact' className='li' activeClass='active' spy={true} smooth={true}>
                        Contact</Link>
                    </ul>
                </div>
        </nav>
    )
}

export default NavBar
