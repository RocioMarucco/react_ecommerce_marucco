import CartWidget from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Link to='/'><h3>Elios Lavender</h3></Link>
            <div className={styles.div}>
               <NavLink to={`/category/Aceites`}>Aceites</NavLink>
               <NavLink to={`/category/Flores Secas`}>Flores Secas</NavLink>
               <NavLink to={`/category/Velas`}>Velas</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar