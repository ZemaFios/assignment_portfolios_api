'use client';
import AuthorImages from '../authorImages/authorImages';
import DebugJson from '../debugJson/debugJson';
import { useEffect, useState } from 'react';

const AuthorsCollection = () => {
  const [data, setData] = useState([]); // Vi sætter data state til at være et tomt array som udgangspunkt.

  // Hook der kaldes når "html"´en er klar.
  useEffect(() => {
    // Vi opretter en "async" funktion og udnytter dermed "await" til vores fetch.
    const fetchData = async () => {
      // Vi fetcher fra vores endpoint.
      const response = await fetch(`http://localhost:3000/api/authors`);

      // Vi omdanner vores response fra tekst til json.
      const result = await response.json();

      // Vi opdatere data state, ved hjælp af setData() useState hook´en.
      setData(result);
    };

    // Vi kalder fetch data funktionen.
    fetchData();
  }, []);
  return (
    <div>
      <h1>Authors Collection</h1>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.author}</p>
        </div>
      ))}
      <DebugJson content={data} />
      <AuthorImages name={'Lena Riis'} />
    </div>
  );
};

export default AuthorsCollection;
