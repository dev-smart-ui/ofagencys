"use client";

import { useState, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import styles from './Card.module.scss';

export default function Card({ title, subtitle }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);

  
  return (
    <div ref={ref} className={`${styles.card} ${hasBeenVisible ? styles.visible : ''}`}>
      <div className={styles.title}>{title}</div>
      <p>{subtitle}</p>
    </div>
  );
}
