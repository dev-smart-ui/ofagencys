"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import ListItems from '../../components/ListItems/ListItems';
import styles from './infoSection.module.scss';

import imageForSection from './image_for_problem.jpg'; 


const problemsData = [
  "Нерозуміння, з чого почати та що робити",
  "Відсутня активність на сторінці",
  "Бракує часу",
  "Підписники не купують контент",
  "Попередня агенція не давала бажанних результатів",
  "Кількість підписників та прибуток не зростають"
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
                <Image ref={ref}
                    src={imageForSection} 
                    alt="Картинка" 
                    className={`${styles.image} ${hasBeenVisible ? styles.visibleImage : ''}`}
                />

                <div className={styles.content}>
                    <h2 ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>OnlyFans - це не просто...</h2>
                    <p ref={ref} className={`${hasBeenVisible ? 'visible' : ''}`}>Якщо ти вже починала вести сторінку - ти точно стикалася з такими труднощами:</p>
                    <ListItems 
                        data={problemsData} 
                        background="red" 
                    />
                </div>
            </div>
            
        </div>
    </section>
  );
}
