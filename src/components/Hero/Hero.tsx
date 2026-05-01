import styles from './Hero.module.css'

import p1 from '../../assets/photo1.jpg'
import p2 from '../../assets/photo2.jpg'
import p5 from '../../assets/photo5.jpg'
import p4 from '../../assets/photo4.jpg'






function Hero() {
  const photos = [
    { n: '01', src: p1 },
    { n: '02', src: p2 },
    { n: '03', src: p5 },
    { n: '04', src: p4 },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <span className={styles.tag}>— Tattoo artist · Lutsk, Ukraine</span>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>
            Fine line &amp; <br />
            <em>graphic</em><br />
            tattooing
          </h2>
          <p className={styles.desc}>
            Delicate linework, ornamental compositions and custom sketches. Each piece is created individually for you.
          </p>
          <div className={styles.buttons}>
            <a href="/booking" className={styles.btnPrimary}>Book a session</a>
            <a href="/portfolio" className={styles.btnGhost}>View portfolio</a>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        {photos.map(({ n, src }) => (
          <div key={n} className={styles.photoCell}>
            <img src={src} alt={`Tattoo work ${n}`} />
            <span className={styles.photoLabel}>photo {n}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero