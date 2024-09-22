import "./Header.scss";
import logo from '../../assets/logo/pixel-heart-png.png'
import { Link } from "react-router-dom";

function Header() {
    return(
    <section className="header">
    <div className="header__logo-container">
        <div className="header__logo">
            <Link to="/">
                <img className="logo" src={logo} alt="DateScape Logo"/>
            </Link>
        </div>
        <h1 className="header__text">DateScape</h1>
    </div>
    <div className="header__links">
        <Link to="/">
            <h2 className="header__link">Home</h2>
        </Link>
        <Link to="/explore">
            <h2 className="header__link">Explore</h2>
        </Link>
    </div>
    </section>
    )
}

export default Header;