import { useParams } from 'react-router-dom'
import { BlankPage } from '@/components'

import styles from './dashboard.module.css'

const DashboardPage = () => {
  const { id } = useParams()
  const renderList = () => {
    return Array.from({ length: 30 }).map((_, index) => (
      <div key={index} className={styles.dashboardItem}>
        <a href={`/dashboard/${index + 1}`}>Dashboard Item {index + 1}</a>
      </div>
    ))
  }

  const renderItem = (itemId: string) => {
    return (
      <>
        <div className={styles.dashboardItem}>Detailed view for Dashboard ID: {itemId}</div>
        <a href="/dashboard">Back to Dashboard List</a>
      </>
    )
  }

  return <BlankPage title={`Dashboard`}>
    {id ? renderItem(id) : renderList()}
  </BlankPage>
}

export { DashboardPage }
export default DashboardPage
