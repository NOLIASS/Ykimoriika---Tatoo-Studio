import styles from './Portfolio.module.css'

const works = [
  { id: '01', src: '/photo1.jpg', title: 'Ornamental sleeve', style: 'Fine line', year: '2024' },
  { id: '02', src: '/photo2.jpg', title: 'Botanical study', style: 'Graphic', year: '2024' },
  { id: '03', src: '/photo9.jpg', title: 'Geometric mandala', style: 'Ornamental', year: '2023' },
  { id: '04', src: '/photo4.jpg', title: 'Abstract portrait', style: 'Fine line', year: '2023' },
  { id: '05', src: '/photo5.jpg', title: 'Minimalist flora', style: 'Fine line', year: '2024' },
  { id: '06', src: '/photo6.jpg', title: 'Sacred geometry', style: 'Graphic', year: '2023' },
  { id: '07', src: '/photo7.jpg', title: 'Blackwork serpent', style: 'Blackwork', year: '2024' },
  { id: '08', src: '/photo8.jpg', title: 'Dotwork sun', style: 'Ornamental', year: '2022' },
  { id: '09', src: '/photo9.jpg', title: 'Fine line moth', style: 'Fine line', year: '2024' },
]

const filters = ['All', 'Fine line', 'Graphic', 'Ornamental', 'Blackwork']

function Portfolio() {
  return (
    <>
      <section className={styles.pageHeader}>
        <span className={styles.tag}>— Portfolio</span>
        <div className={styles.headerRow}>
          <h1 className={styles.heading}>
            Selected<br /><em>works</em>
          </h1>
          <p className={styles.desc}>
            A collection of fine line, graphic and ornamental pieces — each designed and executed individually.
          </p>
        </div>
        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${f === 'All' ? styles.filterBtnActive : ''}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {works.map(({ id, src, title, style, year }) => (
            <div key={id} className={styles.card}>
              <img src={src} alt={title} className={styles.cardPhoto} />
              <div className={styles.cardOverlay}>
                <span className={styles.cardStyle}>{style} · {year}</span>
                <span className={styles.cardTitle}>{title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaHeading}>
          Like what you see?<br />
          <em>Let's work together</em>
        </h2>
        <a href="/booking" className={styles.btnPrimary}>Book a session</a>
      </section>
    </>
  )
}

export default Portfolio