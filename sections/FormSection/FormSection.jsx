"use client";

import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import styles from './formSection.module.scss';


export default function FormSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);

  return (
    <section className={styles.formSection}>
        <div className='container'>
            <h2 ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>Залиш заявку і наш менеджер зв'яжеться з тобою </h2>
        </div>
       
    </section>
  );
}
