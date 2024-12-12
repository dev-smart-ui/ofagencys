"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import ListItems from '../../components/ListItems/ListItems';
import CTAButton from '@/components/CTAButton/CTAButton';
import styles from './infoSection.module.scss';

import imageForSection from './image_for_about.jpg'; 


const aboutData = [
    "Повне оформлення та ведення сторінки",
    "Налаштування платіжних систем",
    "Розробка контент-стратегії",
    "Забезпечення притоку нових підписників",
    "Турбуємося про конфіденційність вашої діяльності",
    "Активна робота в чаті з потенційними клієнтами"
];
  

export default function AboutSection() {
    const { ref, inView } = useInView({ threshold: 0.1 });

    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
      if (inView) {
        setHasBeenVisible(true);
      }
    }, [inView]);

  return (
    <section id='about'>
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h2  ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>Ми — агенція повного циклу</h2>
                    <p  ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>Беремо на себе всі процеси, аби ти змогла повністю сфокусуватися на створенні контенту: </p>
                    <ListItems 
                        data={aboutData} 
                        background="green" 
                    />

                    <CTAButton href="/#lead-form">Подати заявку</CTAButton>
                </div>

                <Image 
                    src={imageForSection} 
                    alt="Фото дівчини" 
                    className={`${styles.image} ${hasBeenVisible ? styles.visibleImage : ''}`}
                />
            </div>
            <div className={styles.aboutBg}></div>
        </div>
    </section>
  );
}
