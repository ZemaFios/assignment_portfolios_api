import ImageSearch from '@/components/search/imageSearch/imageSearch';
import styles from './page.module.css';

export default async function Page() {
  return (
    <main className={styles.page}>
      <ImageSearch />
    </main>
  );
}
