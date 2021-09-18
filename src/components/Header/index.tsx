import styles from './styles.module.css'
import { Link } from 'react-router-dom'

//<img className={styles.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6i_tj3gzw_Y9CywuSNsIPpxWgjJJrFBuPA&usqp=CAU" alt="" />


const Header: React.FC = () => {
    return (
        <header className={styles.header}>

            <span className={styles.logo}
                onClick={() => {window.location.href = '/'}}
            >L</span>

            <nav className={styles.nav}>
                <Link className={styles.link} to="/" >Home</Link>
                <Link className={styles.link} to="/" >Champions</Link>
                <Link className={styles.link} to="/" >About</Link>
                <Link className={styles.link} to="/" >Link</Link>
            </nav>

            <p className={styles.title}>All Champions Lore!</p>

        </header>
    )
}




export default Header