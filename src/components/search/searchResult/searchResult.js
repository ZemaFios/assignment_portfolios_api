import styles from './searchResult.module.css';

const SearchResult = ({ results }) => {
  const resultItems = results.data;

  return (
    <div className={styles.container}>
      {resultItems?.map((result, index) => {
        return <div key={index}> {result.author} </div>;
      })}
    </div>
  );
};

export default SearchResult;
