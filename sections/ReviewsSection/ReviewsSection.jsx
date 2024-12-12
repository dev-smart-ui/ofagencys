"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import styles from './reviewsSection.module.scss';

const testimonialsData = [
  {
    text: "Пів року співпрацюю з вами і всім задоволена 🥵 Мені дуже подобається як зі мною працює контент менеджер, завжди гарно розпише що потрібно зробити і як. Ви круті, вибачте що інколи затримую контент 😂",
    name: "Ангеліна",
    image: "/testimonials/testimonials_1.jpg"
  },
  {
    text: "Дякую велике за те, що повернули мою віру в онлік, бо дві попередні агенції майже зовсім не приносили бажаного результату, а з вами я розцвіла! Особливе дякую адміністратору Максиму за те, що завжди прислухався до моїх бажань 🥰",
    name: "Катя",
    image: "/testimonials/testimonials_2.jpg"
  },
  {
    text: "Ви просите мене написати відгук, але хіба те, що я привела вам дві свої подруги не каже про те, що ви класні?😉 Я і мої подруги задоволені роботою з вами, команда у вас топ!",
    name: "Юля",
    image: "/testimonials/testimonials_3.jpg"
  }
];

export default function ReviewsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);

  return (
    <section className={styles.reviewsSection} id="reviews">
      <div className="container">
        <h2 ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`} >Відгуки наших моделей</h2>
        <div className={styles.cardsWrapper}>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
