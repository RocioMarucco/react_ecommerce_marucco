import CartWidget from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <h3>Elios Lavender</h3>
            <div className={styles.div}>
                <button>Sobre nosotros</button>
                <button>Productos</button>
                <button>Experiencias</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar