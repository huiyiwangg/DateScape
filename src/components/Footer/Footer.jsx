import "./Footer.scss";
import LinkedIn from '../../assets/logo/linkedin.svg';
import Github from '../../assets/logo/github.svg';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer__socials">
                <Link to="https://www.linkedin.com/in/huiyi-wang-/">
                    <img className="social logo" src={LinkedIn} alt="Huiyi Wang Linkedin"/>
                </Link>
                <Link to="https://github.com/huiyiwangg">
                    <img className="social logo" src={Github} alt="Huiyi Wang Github"/>
                </Link>
             </div>
            <p>Copyright Huiyi Wang © 2024 All Rights Reserve</p>
        </footer>
    );
}

export default Footer;
