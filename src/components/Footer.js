import React from 'react'
import {Link} from 'react-scroll'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-wrapper">
                <div className="socials-container">
                    <div className="linkedin">
                        <AiFillLinkedin size={'2.25em'} color={'#dd614a'}/>
                    </div>
                    <div className="github">
                        <AiFillGithub size={'2.25em'} color={'#dd614a'}/>
                    </div>
                </div>
                <div className="footer-links-container">
                        <Link to='projects' className='li' activeClass='active' spy={true} smooth={true}>
                        Projects</Link>
                        <Link to='about' className='li' activeClass='active' spy={true} smooth={true}>
                        About</Link>
                        <Link to='contact' className='li' activeClass='active' spy={true} smooth={true}>
                        Contact</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
