
"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './ListItems.module.scss';

export default function ListItems({ data, background }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);

  const isRed = background.includes('red'); 
  const iconSrc = isRed ? '/elements/cross.svg' : '/elements/check.svg';
  
  return (
    <ul className={styles.listBlock}>
      {data.map((item, index) => (
        <li ref={ref} key={index}  className={`${styles.listItem} ${styles[background]} ${hasBeenVisible ? styles.visible : ''}`}>
           <Image src={iconSrc} alt={isRed ? 'Проблема' : 'Підтвердження'} className={styles.icon}  width={20} height={20} />
           {item}
        </li>
      ))}
    </ul>
  );
}
