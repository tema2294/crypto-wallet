import {Link} from "react-router-dom";
import logo from '../../logo.svg';

import './style.scss'
const Header = () => {

    return (
        <header className='header-container'>
            <nav>
                <ul className='nav justify-content-center'>
                    <li className="nav-item">
                        <Link className='logo-container' to={'/'}>
                            <img width={90} className='nav-logo' src={logo} alt="logo" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to={'edit-page'}>
                            Edit list
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header