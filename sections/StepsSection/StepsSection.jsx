"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import StepItem from "@/components/StepItem/StepItem";
import styles from "./stepsSection.module.scss";

const stepsData = [
  { number: 1, text: "Залишити заявку у нашому телеграм боті", align: "left" },
  { number: 2, text: "Знайомство з командою", align: "center" },
  { number: 3, text: "Обговорення умов співпраці", align: "right" },
  { number: 4, text: "Передача/створення сторінки", align: "center" },
  { number: 5, text: "Налаштування платіжної системи", align: "left" },
  { number: 6, text: "Побудова плану по розвитку сторінки", align: "right" },
  { number: 7, text: "Старт роботи та перші результати", align: "left" },
];

export default function StepsSection() {
  const sectionRef = useRef(null); 
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1 });

  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [bgHeight, setBgHeight] = useState(0); 

  const startOffset = 0.80;

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();

        const viewportHeight = window.innerHeight;
        const startPoint = viewportHeight * startOffset;
        const progress = Math.max(
          0,
          Math.min(1, (viewportHeight - sectionRect.top - startPoint) / (sectionRect.height - startPoint))
        );

      
        setBgHeight(progress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startOffset]);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);


  return (
    <section className={styles.stepsSection} ref={sectionRef}>
      <div className="container"> 
        <h2 ref={inViewRef} className={`${hasBeenVisible ? 'visible' : ''}`}>
          Твій шлях
        </h2>
        <div className={styles.stepsWrapper}>
          {stepsData.map((step, index) => (
            <StepItem
              key={index}
              number={step.number}
              text={step.text}
              align={step.align}
            />
          ))}

          <div
            className={styles.stepsBg}
            style={{ height: `${bgHeight}%` }}
          >
            <Image
              src="/elements/step-line.svg"
              alt="Line"
              width={20}
              height={20}
            />

            <Image
              src="/elements/step-line_mob.svg"
              alt="Line"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
