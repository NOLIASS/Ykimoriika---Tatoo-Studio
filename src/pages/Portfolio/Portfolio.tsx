import styles from './Portfolio.module.css'
import p1 from '../../assets/photo1.jpg'
import p2 from '../../assets/photo2.jpg'
import p4 from '../../assets/photo4.jpg'
import p5 from '../../assets/photo5.jpg'
import p6 from '../../assets/photo6.jpg'
import p7 from '../../assets/photo7.jpg'
import p8 from '../../assets/photo8.jpg'
import p9 from '../../assets/photo9.jpg'


const works = [
  { id: '01', src: p1, title: 'Ornamental sleeve', style: 'Fine line', year: '2024' },
  { id: '02', src: p2, title: 'Botanical study', style: 'Graphic', year: '2024' },
  { id: '03', src: p4, title: 'Geometric mandala', style: 'Ornamental', year: '2023' },
  { id: '04', src: p5, title: 'Abstract portrait', style: 'Fine line', year: '2023' },
  { id: '05', src: p6, title: 'Minimalist flora', style: 'Fine line', year: '2024' },
  { id: '06', src: p7, title: 'Sacred geometry', style: 'Graphic', year: '2023' },
  { id: '07', src: p8, title: 'Blackwork serpent', style: 'Blackwork', year: '2024' },
  { id: '08', src: p9, title: 'Blackwork serpent', style: 'Blackwork', year: '2024' },
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
