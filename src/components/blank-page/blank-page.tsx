import React from 'react'

import styles from './blank-page.module.css'

interface BlankPageProps {
  title?: string
  children?: React.ReactNode
}

const BlankPage = (props: BlankPageProps) => {
  const { title, children } = props
  return (
    <div className={styles.appBlankPage}>
      <span className={styles.title}>{title}</span>
      {children}
    </div>
  )
}

export default BlankPage
