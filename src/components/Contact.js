import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <section id='contact' className='contact-container'>
            <div className="contact-wrapper">
                    <div className="title-container">
                            <h2>Contact Me</h2>
                        </div>
                <form className='form' onSubmit={onSubmit}>
                    <input type="hidden" name="form-name" value="contact" /> 
                    <p type="Name:">
                        <input type="text" name="name" placeholder="Write Your name here..."  value={name} onChange={(e)=> setName(e.target.value)}/>
                    </p>
                    <p type="Email">                    
                        <input type="email" name="email" placeholder="Let us know how to contact you back" value={email} onChange={(e)=> setEmail(e.target.value)} aria-describedby="emailHelp" />
                    </p>
                    <p type="Message:">
                        <input name="message" placeholder="What would you like to tell us.." value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </p>
                    <button type="submit" className="form-btn">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
