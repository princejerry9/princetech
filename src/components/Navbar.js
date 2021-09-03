import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import "./Navbar.css"
import {Button} from './Button';

const Navbar = ({
    text1, 
    text2, 
    text3, 
    text4,
    text5,
    logo
}) => {
        const [click, setClick] = useState(false);
        const [button, setButton] = useState(true);

        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

        const showButton = () => {
            if (window.innerWidth <= 960) {
                setButton(false);
            } 
            else {
                setButton (true);
            }
        };
        
        useEffect (() => {
            showButton ();
        }, []);

        window.addEventListener('resize', showButton);


    
    return (
        <div>
           <nav className="navbar">
            <div className="navbar-container">
                {/* app logo */}
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    {logo}
                    <i class='fab fa-typo3' />
                </Link>

                {/* hamburger */}
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                    {/* navlist */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            {text1}
                        </Link>
                 </li> 
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">
                           {text2}
                        </Link>
                 </li> 
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">
                            {text3}
                        </Link>
                  </li> 
                    <li className="nav-item">
                        <Link to="/services" className="nav-links">
                            {text4}
                        </Link>
                 </li>

                    <li className="nav-item">
                      <Link to="/signup" className="nav-links">
                      {text5}
                     </Link>
                     
                     </li>
            
                </ul> 
                {button && <Button buttonStyle='btn--outLine'>SIGN UP</Button>}

             </div>   
            </nav> 
        </div>
    )
}

export default Navbar
