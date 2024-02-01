'use client';
import { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import styles from './galleryImages.module.css';

const GalleryImages = ({ gallery = 'umbra' }) => {
  const [galleryName, setGalleryName] = useState(gallery);
  const [data, setData] = useState([]); // Vi sætter data state til at være et tomt array som udgangspunkt.

  useEffect(() => {
    setGalleryName(gallery);
  }, [gallery]);

  // Hook der kaldes når "html"´en er klar.
  useEffect(() => {
    // Vi opretter en "async" funktion og udnytter dermed "await" til vores fetch.
    const fetchData = async () => {
      // Vi fetcher fra vores endpoint.
      const response = await fetch(`http://localhost:3000/api/images?gallery=${galleryName}`);

      // Vi omdanner vores response fra tekst til json.
      const result = await response.json();

      // Vi opdatere data state, ved hjælp af setData() useState hook´en.
      setData(result);
    };

    // Vi kalder fetch data funktionen.
    fetchData();
  }, [galleryName]);

  useEffect(() => {
    console.log('Swiper Registered');
    register();
  }, []);

  return (
    <div className={styles.slider}>
      <button onClick={() => setGalleryName('umbra')}>UMBRA</button>
      <button onClick={() => setGalleryName('obscura')}>OBSCURA</button>
      <h2>Gallery Images for {galleryName}</h2>
      <swiper-container slides-per-view="1" keyboard={true} rewind={true}>
        {data.map((item, index) => {
          return (
            <swiper-slide key={index}>
              <h1>{item.author}</h1>
              <Image src={item.path} width={300} height={300} alt={item.name} />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
};

export default GalleryImages;
