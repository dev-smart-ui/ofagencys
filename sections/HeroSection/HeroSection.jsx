"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Image from 'next/image';
import styles from './heroSection.module.scss';
import CTAButton from '@/components/CTAButton/CTAButton';

import bg from './hero_bg.jpg'; 

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);


  return (
    <section className={styles.heroSection}>
      <div className='container'>                
          <div className={styles.content}>
            <h1 ref={ref} className={`${hasBeenVisible ? styles.visible : ''}`}>Хочеш заробляти більше на OnlyFans?</h1>
            <p  ref={ref} className={`${hasBeenVisible ? styles.visible : ''}`}>Приєднуйся до топової агенції зараз та збільшуй свої доходи без зайвих зусиль!</p>
            <CTAButton href="/#lead-form" >Подати заявку</CTAButton>
          </div>
      </div>
      <Image src={bg} alt="Фон з дівчиною" width={2400} height={1600} className={styles.heroBg} />
    </section>
  );
}
