import CartWidget from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Link to='/'><h3>Elios Lavender</h3></Link>
            <div className={styles.div}>
               <NavLink to={'/category/Aceites'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Aceites</NavLink>
               <NavLink to={'/category/FloresSecas'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Aceites</NavLink>
               <NavLink to={'/category/Velas'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Aceites</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar