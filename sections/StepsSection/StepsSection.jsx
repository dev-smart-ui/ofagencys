"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import StepItem from "@/components/StepItem/StepItem";
import styles from "./stepsSection.module.scss";

const stepsData = [
  { number: 1, text: "Залиш заявку в нашому Telegram-боті — швидко та зручно" },
  { number: 2, text: "Перше знайомство — представимо команду, що буде працювати з тобою"},
  { number: 3, text: "Узгодження деталей — обговоримо усі нюанси співпраці та твої очікування"},
  { number: 4, text: "Передача або запуск сторінки — налаштовуємо все для бездоганної роботи"},
  { number: 5, text: "Інтеграція платежів — впроваджуємо надійну та зручну систему розрахунків"},
  { number: 6, text: "Розробка стратегії — створюємо детальний план для росту твоєї сторінки"},
  { number: 7, text: "Запуск та перші досягнення — стартуємо і одразу показуємо результат"},
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
        <h2 ref={inViewRef} className={`${styles.title} ${hasBeenVisible ? 'visible' : ''}`}>
          Твій шлях до успіху
        </h2>
        <div className={styles.stepsWrapper}>
          {stepsData.map((step, index) => (
            <StepItem
              key={index}
              number={step.number}
              text={step.text}
            />
          ))}

          <div
            className={styles.stepsBg}
            style={{ height: `${bgHeight}%` }}
          >
            <Image
              src="/elements/step-line.svg"
              alt="Лінія шляху"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className={styles.stepsElements}></div>
      </div>
    </section> 
  );
}
