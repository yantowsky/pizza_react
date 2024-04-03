import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <NavLink className="logo" to="/">
                Pizza Day
            </NavLink>
            <nav className="header__nav">
                <NavLink className="header_link" to='/login'>
                    Login
                </NavLink>
                <NavLink className="header_link" to='/menu'>
                    Menu
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;