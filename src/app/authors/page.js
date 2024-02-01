import styles from './page.module.css';
import AuthorsCollection from '@/components/dev/authorsCollection/authorsCollection';

export default async function Page() {
  return (
    <main className={styles.page}>
      <AuthorsCollection />
    </main>
  );
}
