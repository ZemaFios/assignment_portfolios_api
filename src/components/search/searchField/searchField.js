'use client';
import { useDebouncedCallback } from 'use-debounce';
import styles from './searchField.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SearchField = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChangeHandler = useDebouncedCallback((e) => {
    let searchterm = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (searchterm) {
      params.set('searchterm', searchterm);
    } else {
      params.delete('searchterm');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search" onChange={onChangeHandler} />
    </div>
  );
};

export default SearchField;
