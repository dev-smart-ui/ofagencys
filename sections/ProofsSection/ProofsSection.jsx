"use client";

import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './proofsSection.module.scss';

export default function ProofsSection() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1 });
  const [hasTitleBeenVisible, setHasTitleBeenVisible] = useState(false);

  useEffect(() => {
    if (titleInView) {
      setHasTitleBeenVisible(true);
    }
  }, [titleInView]);

  const screenshotsData = [
    { src: '/proofs/0157k.webp', alt: 'Доказ 1' },
    { src: '/proofs/0249k.webp', alt: 'Доказ 2' },
    { src: '/proofs/0344k.webp', alt: 'Доказ 3' },
    { src: '/proofs/0413k.webp', alt: 'Доказ 4' },
  ];

  return (
    <section>
      <div className="container">
        <h2
          ref={titleRef}
          className={`${hasTitleBeenVisible ? 'visible' : ''}`}
        >
          Менше слів – більше доказів
        </h2>
        <div className={styles.screenshotsWrapper}>
          {screenshotsData.map((shot, index) => {
            const { ref, inView } = useInView({ threshold: 0.1 });
            const [hasScreenshotBeenVisible, setHasScreenshotBeenVisible] = useState(false);

            useEffect(() => {
              if (inView) {
                setHasScreenshotBeenVisible(true);
              }
            }, [inView]);

            return (
              <div
                key={index}
                ref={ref}
                className={`${styles.screenshotWrap} ${
                  hasScreenshotBeenVisible ? styles.visible : ''
                }`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={400}
                  height={300}
                  className={`${styles.screenshotImage}`}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.proofsBg}></div>
      </div>

   
    </section>
  );
}
