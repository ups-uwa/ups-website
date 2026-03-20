import { useState } from 'react'


import "./navbar.css"
import { useLocation, Link } from 'react-router-dom';
export default function Navbar() {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const pages = [
        { path: "/", label: "Home" },
        { path: "/Events", label: "Events" },
        { path: "/Clubroom", label: "Clubroom" },
        { path: "/Our-Sponsors", label: "Our Sponsors" },
        { path: "/Documents", label: "Documents" },
        { path: "/Contact-Us", label: "Contact Us" },
        
    ];


    const Menu = () => (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <div className='emas__navbar-links_menu'>
            {pages.map((page) => (
                <div key={page.path} className={`navbar-links-listing ${location.pathname === page.path ? 'active' : ''}`}>
                    <Link to={page.path}>
                        {page.label}
                    </Link>
            </div>
        ))}
        </div>
        
        </>
    )

    

    return (
        <div className="ups__navbar">
        <div className='emas__navbar-heading'>
            <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="UPS logo" />
            <h1>U P S</h1>
        </div>
        <div className={`emas__navbar-links ${menuOpen ? 'open' : ''}`}>
            <Menu />
        </div>
        <button className="emas__navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
        </button>
        </div>
    )
}
