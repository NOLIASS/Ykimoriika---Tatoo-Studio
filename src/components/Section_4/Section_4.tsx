import styles from './Section_4.module.css'

function Section_4() {
  return (
    <section className={styles.section}>
      <span className={styles.tag}>— Ready to start?</span>
      <h2 className={styles.heading}>
        Let's create something<br />
        <em>made for you</em>
      </h2>
      <p className={styles.body}>
        Fill out the booking form and I'll get back to you within 48 hours to discuss your idea and schedule a consultation.
      </p>
      <div className={styles.buttons}>
        <a href="/booking" className={styles.btnPrimary}>Book a session</a>
        <a href="/portfolio" className={styles.btnGhost}>View portfolio</a>
      </div>
    </section>
  )
}

export default Section_4