import styles from './About.module.css'
import artistPhoto from '../../assets/photo_2026-05-01_13-08-34.jpg'

const skills = [
  { label: 'Fine line', level: 95 },
  { label: 'Graphic', level: 85 },
  { label: 'Ornamental', level: 80 },
  { label: 'Blackwork', level: 70 },
]

const stats = [
  { value: '6', label: 'Years of experience' },
  { value: '500+', label: 'Pieces created' },
  { value: '3', label: 'Styles mastered' },
]

const steps = [
  { step: '01', title: 'Consultation', desc: 'We discuss your idea, placement, size and any references you have in mind.' },
  { step: '02', title: 'Custom sketch', desc: 'I create a unique design tailored to your body and vision — no templates.' },
  { step: '03', title: 'The session', desc: 'We refine the sketch together before anything touches skin. Precision first.' },
  { step: '04', title: 'Aftercare', desc: 'Full aftercare guidance to ensure your tattoo heals beautifully.' },
]

function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.photoSide}>
          <img src={artistPhoto} alt="Artist" className={styles.photo} />
          <div className={styles.photoCaption}>
            <p className={styles.photoCaptionLabel}>Tattoo artist</p>
            <p className={styles.photoCaptionName}>Ykimoriiki</p>
          </div>
        </div>

        <div className={styles.introSide}>
          <span className={styles.tag}>— About me</span>
          <h1 className={styles.heading}>
            Art that lives<br /><em>on skin</em>
          </h1>
          <p className={styles.body}>
            I'm a tattoo artist from Lutsk, Ukraine, specialising in fine line and graphic work. My approach is rooted in precision, minimalism and a deep respect for the permanence of the medium.
          </p>
          <p className={styles.body}>
            Every piece begins as a conversation — I want to understand not just what you want, but why. That dialogue shapes everything from the sketch to the final line.
          </p>
        </div>
      </section>

      <section className={styles.stats}>
        {stats.map(({ value, label }) => (
          <div key={label} className={styles.statItem}>
            <span className={styles.statValue}>{value}</span>
            <span className={styles.tag}>{label}</span>
          </div>
        ))}
      </section>

      <section className={styles.skillsProcess}>
        <div className={styles.skillsSide}>
          <span className={styles.tag}>— Styles & expertise</span>
          <h2 className={styles.headingMd}>
            What I <em>do best</em>
          </h2>
          <div className={styles.skillList}>
            {skills.map(({ label, level }) => (
              <div key={label} className={styles.skillItem}>
                <div className={styles.skillRow}>
                  <span className={styles.tag}>{label}</span>
                  <span className={styles.skillPct}>{level}%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillFill} style={{ width: `${level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.processSide}>
          <span className={styles.tag}>— My process</span>
          <h2 className={styles.headingMd}>
            How it <em>works</em>
          </h2>
          <div className={styles.processList}>
            {steps.map(({ step, title, desc }) => (
              <div key={step} className={styles.processItem}>
                <span className={styles.processStep}>{step}</span>
                <div className={styles.processContent}>
                  <span className={styles.processTitle}>{title}</span>
                  <span className={styles.processDesc}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.heading}>
          Ready to get<br /><em>your piece?</em>
        </h2>
        <p className={styles.ctaBody}>
          Book a consultation and let's start creating something made specifically for you.
        </p>
        <a href="/booking" className={styles.btnPrimary}>Book a session</a>
      </section>
    </>
  )
}

export default About