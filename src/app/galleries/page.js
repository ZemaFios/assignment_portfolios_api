import GalleriesCollection from '@/components/dev/galleriesCollection/galleriesCollection';
import styles from './page.module.css';

export default async function Page() {
  return (
    <main className={styles.page}>
      <GalleriesCollection />
    </main>
  );
}
