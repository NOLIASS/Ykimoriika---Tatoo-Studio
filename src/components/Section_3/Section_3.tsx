import styles from './Section_3.module.css'

function Section_3() {
  return (
    <section className={styles.section}>
      <div className={styles.photoSide}>
         <img
            src="/photo_2026-05-01_13-08-34.jpg"
            alt="Artist"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <span className={styles.photoPlaceholderText}>artist photo</span>
        <div className={styles.photoCaption}>
          <p className={styles.photoCaptionLabel}>Based in</p>
          <p className={styles.photoCaptionCity}>Lutsk, Ukraine</p>
        </div>
      </div>

      <div className={styles.textSide}>
        <span className={styles.tag}>— About the artist</span>
        <h2 className={styles.heading}>
          Crafting skin<br />
          <em>as canvas</em>
        </h2>
        <div className={styles.textGroup}>
          <p className={styles.body}>
            I'm a tattoo artist specialising in fine line and graphic work — delicate, intentional pieces that age beautifully. Every design starts with a conversation, shaped around your story and body.
          </p>
          <p className={styles.body}>
            With over 6 years of experience and 500+ pieces created, I work exclusively by appointment to give each client the time and attention their vision deserves.
          </p>
        </div>
        <div className={styles.tags}>
          {['Fine line', 'Graphic', 'Ornamental', 'Blackwork'].map((t) => (
            <span key={t} className={styles.styleTag}>{t}</span>
          ))}
        </div>
        <a href="/about" className={styles.link}>Full story →</a>
      </div>
    </section>
  )
}

export default Section_3