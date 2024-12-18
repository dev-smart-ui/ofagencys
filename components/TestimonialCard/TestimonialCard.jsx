"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './TestimonialCard.module.scss';

export default function TestimonialCard({ text, name, image }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`${styles.card} ${hasBeenVisible ? styles.visible : ''}`}  >
      <div className={styles.people}>
        <Image src={image} alt={name} width={50} height={50}/>
        <span>{name}</span>
      </div>

      <p className={styles.text}>{text}</p>
    </div>
  );
}
