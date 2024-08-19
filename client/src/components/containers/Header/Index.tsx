import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo_90y.png';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo_ctn}>
                    <NavLink to={"/"} 
                        onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt="shifumi"/>
                    </NavLink>
                </div>

                <ul>
                    <li><NavLink to={"/"}>home</NavLink></li>
                    <li><NavLink to={"/en/about"}>about</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}