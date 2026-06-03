import { Outlet } from 'react-router'

import { Footer, Header } from '@/components'

import styles from './layout.module.css'

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
