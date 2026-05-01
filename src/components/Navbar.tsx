import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

type Head = { brand: string }

function Navbar({ brand }: Head) {
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'home' },
    { to: '/portfolio', label: 'portfolio' },
    { to: '/about', label: 'about' },
    { to: '/booking', label: 'booking' },
  ]

  return (
    <nav className={styles.nav}>
      <h1 className={styles.brand}>{brand}</h1>
      <ul className={styles.links}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`${styles.link} ${pathname === to ? styles.linkActive : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar