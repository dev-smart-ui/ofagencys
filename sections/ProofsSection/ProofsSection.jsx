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
    { src: '/proofs/stats1.png', alt: 'Доказ 1' },
    { src: '/proofs/stats2.png', alt: 'Доказ 2' },
    { src: '/proofs/stats3.png', alt: 'Доказ 3' },
    { src: '/proofs/stats4.png', alt: 'Доказ 4' },
  ];

  return (
    <section>
      <div className="container">
        <h2
          ref={titleRef}
          className={`${hasTitleBeenVisible ? 'visible' : ''}`}
        >
          Ми робимо більше – за менше слів.
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
      </div>

   
    </section>
  );
}
