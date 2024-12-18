"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import ListItems from '../../components/ListItems/ListItems';
import styles from './infoSection.module.scss';

import imageForSection from './image_for_problem.jpg'; 

const problemsData = [
  "Важко визначитися, з чого почати і як правильно розвивати сторінку",
  "Мала активність аудиторії та низька залученість",
  "Брак часу на систематичне та результативне ведення профілю",
  "Аудиторія не проявляє інтерес до твоїх продуктів чи послуг",
  "Співпраця з агентствами не принесла очікуваних результатів",
  "Зусилля не приносять зростання кількості підписників і доходу"
];

export default function ProblemSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);

  return (
    <section>
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h2 ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>OnlyFans – це більше, ніж просто платформа для контенту</h2>
                    <p ref={ref} className={`${hasBeenVisible ? 'visible' : ''}`}>Ведучи свій профіль, ти, напевно, вже зіштовхувалася з подібними труднощами:</p>
                    <ListItems 
                        data={problemsData} 
                        background="red" 
                    />
                </div>

                <Image ref={ref}
                    src={imageForSection} 
                    alt="Фото дівчини" 
                    className={`${styles.image} ${hasBeenVisible ? styles.visibleImage : ''}`}
                />


            </div>
            
        </div>
    </section>
  );
}
