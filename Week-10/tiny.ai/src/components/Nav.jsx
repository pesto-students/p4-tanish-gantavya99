import React from 'react'

const Nav = () => {
  return (
    <nav className="nav">
        
        <a href='/'className='tiny'>Tiny.ai</a>
        <ul className="pages">
            <li>
            <a href='/features'>Features</a>
            </li>
            <li>
                <a href='/Pricing'>Pricing</a>
            </li>
            <li>
            <a href='/Resources'>Resources</a>
            </li>
        </ul>
        <ul className="login">
        <li>
            <a href='/login'>Login</a>
            </li>
            <li>
            <a href='/signUp'>Sign Up</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav