import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import styles from './Navbar.module.css'

type Head = { brand: string }

function Navbar({ brand }: Head) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/booking', label: 'Booking' },
  ]

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.brand}>{brand}</Link>

      {/* Десктоп */}
      <ul className={styles.desktopLinks}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className={`${styles.link} ${pathname === to ? styles.active : ''}`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Бургер */}
      <button
        className={styles.burger}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        type="button"
      >
        <span className={open ? styles.line1Open : styles.line1} />
        <span className={open ? styles.line2Open : styles.line2} />
        <span className={open ? styles.line3Open : styles.line3} />
      </button>

      {/* Мобільне меню */}
      {open && (
        <div className={styles.mobileMenu}>
          <div className={styles.backdrop} onClick={() => setOpen(false)} />
          <div className={styles.drawer}>
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`${styles.mobileLink} ${pathname === to ? styles.active : ''}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar