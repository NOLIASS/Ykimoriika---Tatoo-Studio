import { colors, fonts } from '../styles/tokens'
import { tag, bodyText, btnPrimary } from '../styles/mixins'

function Footer() {
  const links = {
    navigation: [
      { label: 'Home', href: '/' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'About', href: '/about' },
      { label: 'Booking', href: '/booking' },
    ],
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/ykimoriika/' },
      { label: 'Telegram', href: 'https://t.me' },
      { label: 'Pinterest', href: 'https://pinterest.com' },
    ],
  }

  const linkStyle = { fontSize: '12px', letterSpacing: '0.1em', color: colors.textMuted, textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }

  return (
    <footer style={{ backgroundColor: colors.bg, borderTop: `0.5px solid ${colors.border}`, padding: 'clamp(40px, 6vw, 64px) clamp(20px, 5vw, 52px) 32px' }}>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '52px',
        paddingBottom: '52px',
        borderBottom: `0.5px solid ${colors.border}`,
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ fontFamily: fonts.serif, fontWeight: 300, fontSize: '32px', letterSpacing: '0.1em', color: colors.textPrimary, margin: 0 }}>
            YKIMORIIKI
          </h2>
          <p style={bodyText({ fontSize: '12px', maxWidth: '280px' })}>
            Fine line & graphic tattoo artist based in Lutsk, Ukraine. Working by appointment only.
          </p>
          <a href="/booking" style={{ ...btnPrimary, padding: '12px 24px', width: 'fit-content' }}>Book now</a>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={tag({ marginBottom: '12px' })}>Navigation</span>
          {links.navigation.map(({ label, href }) => (
            <a key={label} href={href} style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = colors.textPrimary)}
              onMouseLeave={e => (e.currentTarget.style.color = colors.textMuted)}
            >{label}</a>
          ))}
        </div>

        {/* Social */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={tag({ marginBottom: '12px' })}>Social</span>
          {links.social.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = colors.textPrimary)}
              onMouseLeave={e => (e.currentTarget.style.color = colors.textMuted)}
            >{label}</a>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '28px', flexWrap: 'wrap', gap: '12px' }}>
        {['© 2025 Ykimoriiki', 'Lutsk, Ukraine', 'By appointment only'].map((t) => (
          <span key={t} style={tag({ color: colors.textDim })}>{t}</span>
        ))}
      </div>
    </footer>
  )
}

export default Footer