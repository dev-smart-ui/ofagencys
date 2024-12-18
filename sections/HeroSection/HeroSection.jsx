"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Image from 'next/image';
import styles from './heroSection.module.scss';
import CTAButton from '@/components/CTAButton/CTAButton';

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
            <h1 ref={ref} className={`${hasBeenVisible ? styles.visible : ''}`}>Збільш свій дохід на <span>OnlyFans</span> з професіоналами</h1>
            <p  ref={ref} className={`${hasBeenVisible ? styles.visible : ''}`}>Приєднуйся до нашого агентства і отримуй стабільний прибуток від твоєї творчості. Ми забезпечимо твою популярність</p>
            <CTAButton href="/#form" >Збільшити дохід</CTAButton>
          </div>
      </div>
      <Image src='/hero_bg.jpg' alt="Фон з дівчиною" width={2400} height={1600} className={styles.heroBg} />
    </section>
  );
}
