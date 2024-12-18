"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import ListItems from '../../components/ListItems/ListItems';
import CTAButton from '@/components/CTAButton/CTAButton';
import styles from './infoSection.module.scss';

import imageForSection from './image_for_about.jpg'; 


const aboutData = [
    "Не знаєш, з чого почати та як розвивати свою сторінку",
    "Налаштування безпечних платіжних систем.",
    "Розробка індивідуальної стратегії контенту",
    "Привернення нових підписників і забезпечення їхньої активності",
    "Забезпечуємо конфіденційність твоєї діяльності",
    "Постійна комунікація з потенційними клієнтами для збільшення взаємодії"
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
                <Image 
                    src={imageForSection} 
                    alt="Фото дівчини" 
                    className={`${styles.image} ${hasBeenVisible ? styles.visibleImage : ''}`}
                />


                <div className={styles.content}>
                    <h2  ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>OnlyFans – це більше, ніж просто платформа для контенту</h2>
                    <p  ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>Ми беремо на себе всі аспекти ведення твоєї сторінки, щоб ти могла повністю зосередитися на створенні контенту: </p>
                    <ListItems 
                        data={aboutData} 
                        background="green" 
                    />
                </div>

                
            </div>
        </div>
    </section>
  );
}
