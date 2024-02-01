'use client';
import Image from 'next/image';
import DebugJson from '../debugJson/debugJson';
import { useEffect, useState } from 'react';

const AuthorImages = ({ name }) => {
  const [data, setData] = useState([]); // Vi sætter data state til at være et tomt array som udgangspunkt.

  // Hook der kaldes når "html"´en er klar.
  useEffect(() => {
    // Vi opretter en "async" funktion og udnytter dermed "await" til vores fetch.
    const fetchData = async () => {
      // Vi fetcher fra vores endpoint.
      const response = await fetch(`http://localhost:3000/api/images?author=${name}`);

      // Vi omdanner vores response fra tekst til json.
      const result = await response.json();

      // Vi opdatere data state, ved hjælp af setData() useState hook´en.
      setData(result);
    };

    // Vi kalder fetch data funktionen.
    fetchData();
  }, [name]);
  return (
    <div>
      <h1>{name}</h1>
      {data.map((item, index) => (
        <div key={index}>
          <Image src={item.path} width={300} height={300} alt={item.name} />
        </div>
      ))}
      <DebugJson content={data} />
    </div>
  );
};

export default AuthorImages;
