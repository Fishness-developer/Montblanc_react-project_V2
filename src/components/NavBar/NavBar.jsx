import "../../styles/nav.scss"
import { Link } from 'react-router-dom';
const NavBar = () =>{
    return (
        <nav className="nav">
            <ul className="nav__menu">
              <Link  to={`/catalog`} className="nav__menu-item"> catalog </Link>
                <li className="nav__menu-item">special offers</li>
                <li className="nav__menu-item">delivery</li>
                <li className="nav__menu-item">contacts</li>
            </ul>
        </nav>
    )
}
export default NavBar;