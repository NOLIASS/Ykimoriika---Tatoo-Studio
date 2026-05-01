import styles from './Section_2.module.css'

import photo1 from '../../assets/photo1.jpg'
import photo2 from '../../assets/photo2.jpg'
import photo4 from '../../assets/photo4.jpg'
import photo5 from '../../assets/photo5.jpg'
import photo6 from '../../assets/photo6.jpg'
import photo7 from '../../assets/photo7.jpg'

const works = [
  { id: '01', src: photo1, title: 'Ornamental sleeve', style: 'Fine line' },
  { id: '02', src: photo2, title: 'Botanical study', style: 'Graphic' },
  { id: '03', src: photo7, title: 'Geometric mandala', style: 'Ornamental' },
  { id: '04', src: photo4, title: 'Abstract portrait', style: 'Fine line' },
  { id: '05', src: photo5, title: 'Minimalist flora', style: 'Fine line' },
  { id: '06', src: photo6, title: 'Sacred geometry', style: 'Graphic' },
]

function Section_2() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Selected<br /><em>works</em>
        </h2>
        <a href="/portfolio" className={styles.viewAll}>View all →</a>
      </div>

      <div className={styles.grid}>
        {works.map(({ id, src, title, style }) => (
          <div key={id} className={styles.card}>
            <img src={src} alt={title} className={styles.photo} />
            <div className={styles.overlay}>
              <span className={styles.overlayStyle}>{style}</span>
              <span className={styles.overlayTitle}>{title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section_2