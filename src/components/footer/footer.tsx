import styles from './footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.appFooter}>
      <p>&copy; {currentYear} React Starter. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer