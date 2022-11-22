import { Link } from 'react-router-dom'
import './navbar.css'

import background from '../../assets/logo/Oval.png'
import logo from '../../assets/logo/logo.png'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid" style={{ position: 'relative' }}>
                <img src={background} className='bg-img' alt="bg" />
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg">
                            <img src={logo} alt='logo' className="navbar-brand" />
                            <span className="navbar-brand">Medical</span>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mt-2 mt-lg-0 mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to='/' className="nav-link" aria-current="page" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/' className="nav-link" >Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/' className="nav-link" >Facilities</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/' className="nav-link" >Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/' className="nav-link" >About Us</Link>
                                    </li>
                                </ul>
                                <form className='d-flex gap-4'>
                                    <button>Login</button>
                                    <button>Register</button>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>
            <Outlet />
        </>

    )
}

export default Navbar
