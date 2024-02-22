import styles from '@/styles/components/Footer.module.scss'

const Footer = () => {
  const yearNow = (new Date()).getFullYear();
  
  return (
    <footer className={styles.Footer}>
      <span>copyright</span><span>{yearNow}</span>
    </footer>
  )
}

export default Footer