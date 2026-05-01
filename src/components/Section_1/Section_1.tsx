import styles from './Section_1.module.css'

const stats = [
  { value: '6', label: 'Years of experience' },
  { value: '500+', label: 'Pieces created' },
  { value: '3', label: 'Styles mastered' },
]

function Section_1() {
  return (
    <section className={styles.section}>
      {stats.map(({ value, label }) => (
        <div key={label} className={styles.item}>
          <span className={styles.value}>{value}</span>
          <span className={styles.label}>{label}</span>
        </div>
      ))}
    </section>
  )
}

export default Section_1