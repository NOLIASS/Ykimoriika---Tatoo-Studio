import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'About', to: '/about' },
    { label: 'Booking', to: '/booking' },
  ]

  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/ykimoriika/' },
    { label: 'Telegram', href: 'https://t.me' },
    { label: 'Pinterest', href: 'https://pinterest.com' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        <div className={styles.brand}>
          <span className={styles.brandName}>Ykimoriiki</span>
          <p className={styles.brandDesc}>Fine line & graphic tattoo artist based in Lutsk, Ukraine. Working by appointment only.</p>
          <Link to="/booking" className={styles.btn}>Book a session</Link>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <span className={styles.colTitle}>Navigation</span>
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} className={styles.colLink}>{label}</Link>
            ))}
          </div>

          <div className={styles.col}>
            <span className={styles.colTitle}>Social</span>
            {socialLinks.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.colLink}>{label}</a>
            ))}
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <span>© 2025 Ykimoriiki</span>
        <span>Lutsk, Ukraine</span>
        <span>By appointment only</span>
      </div>
    </footer>
  )
}

export default Footer