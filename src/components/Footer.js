import React from 'react'
import {Link} from 'react-scroll'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-wrapper">
                <div className="socials-container">
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/daniel-ventura-608780207/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size={'2.25em'} color={'#dd614a'}/></a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/Dvent1123" target="_blank" rel="noopener noreferrer">                        
                        <AiFillGithub size={'2.25em'} color={'#dd614a'}/></a>
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
