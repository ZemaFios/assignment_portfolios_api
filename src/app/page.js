import styles from './page.module.css'
import ClientComponent from '@/components/dev/clientComponent/clientComponent'

export default async function Page() {

  return (
    <main className={styles.page}>
      
      <ClientComponent />
    </main>
  )
}

