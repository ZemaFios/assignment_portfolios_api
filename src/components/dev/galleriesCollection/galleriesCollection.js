'use client';
import styles from './galleriesCollection.module.css';
import GalleryImages from '../galleryImages/galleryImages';
import { useState } from 'react';

const GalleriesCollection = () => {
  const [galleryName, setGalleryName] = useState('umbra');
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <button onClick={() => setGalleryName('umbra')}>UMBRA</button>
          <button onClick={() => setGalleryName('obscura')}>OBSCURA</button>
        </div>
        <GalleryImages gallery={galleryName} />
      </div>
    </div>
  );
};

export default GalleriesCollection;
