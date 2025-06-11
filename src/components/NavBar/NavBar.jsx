import "../../styles/nav.scss"
const NavBar = () =>{
    return (
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__menu-item"><a href="/">catalog</a></li>
                <li className="nav__menu-item"><a href="/">special offers</a></li>
                <li className="nav__menu-item"><a href="/">delivery</a></li>
                <li className="nav__menu-item"><a href="/">contacts</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;