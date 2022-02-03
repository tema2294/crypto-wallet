import {Link} from "react-router-dom";
import logo from '../../logo.svg';

import './style.scss'
import {useSelector} from "react-redux";
import {userSelector} from "../../store/selectors/selectors";

const Header = () => {
    const userData = useSelector(userSelector)
    const username = userData?.username
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
                    <li className="nav-item">
                        <Link className='nav-link' to={'chatPage'}>
                            Chat
                        </Link>
                    </li>
                </ul>
            </nav>
            {username &&
            <div className='header-user-info'>
                {username}
            </div>}
        </header>
    )
}

export default Header