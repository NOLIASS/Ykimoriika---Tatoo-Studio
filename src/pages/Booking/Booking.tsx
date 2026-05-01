import styles from './Booking.module.css'

const fields = [
  { label: 'Your name', type: 'text', placeholder: 'Ім\'я' },
  { label: 'Email', type: 'email', placeholder: 'your@email.com' },
  { label: 'Instagram (optional)', type: 'text', placeholder: '@handle' },
]

const styleOptions = ['Fine line', 'Graphic', 'Ornamental', 'Blackwork', 'Not sure']

const infoItems = [
  { title: 'Response time', desc: 'I reply to all inquiries within 48 hours.' },
  { title: 'Consultation', desc: 'We\'ll have a short call or chat to discuss your idea in detail before anything is booked.' },
  { title: 'Custom design', desc: 'Every piece is drawn from scratch — no flash, no templates.' },
  { title: 'Deposit', desc: 'A deposit is required to secure your appointment. It goes toward the final price.' },
]

function Booking() {
  return (
    <>
      <section className={styles.pageHeader}>
        <span className={styles.tag}>— Booking</span>
        <h1 className={styles.heading}>
          Book a<br /><em>session</em>
        </h1>
        <p className={styles.desc}>
          Fill out the form below and I'll get back to you within 48 hours. The more detail you give, the better I can prepare for our consultation.
        </p>
      </section>

      <section className={styles.body}>
        <div className={styles.formSide}>
          {fields.map(({ label, type, placeholder }) => (
            <div key={label} className={styles.field}>
              <label className={styles.label}>{label}</label>
              <input type={type} placeholder={placeholder} className={styles.input} />
            </div>
          ))}

          <div className={styles.field}>
            <label className={styles.label}>Style</label>
            <div className={styles.styleTags}>
              {styleOptions.map((s) => (
                <button key={s} className={styles.styleBtn}>{s}</button>
              ))}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Describe your idea</label>
            <textarea
              rows={5}
              placeholder="Placement, size, references, mood..."
              className={styles.textarea}
            />
          </div>

          <button className={styles.btnPrimary}>Send request</button>
        </div>

        <div className={styles.infoSide}>
          <div className={styles.infoList}>
            <span className={styles.tag}>— What to expect</span>
            {infoItems.map(({ title, desc }) => (
              <div key={title} className={styles.infoItem}>
                <p className={styles.infoTitle}>{title}</p>
                <p className={styles.infoDesc}>{desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.note}>
            <p className={styles.noteText}>
              Based in Lutsk, Ukraine. All sessions by appointment only.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Booking