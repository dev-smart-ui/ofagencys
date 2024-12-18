"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import styles from './reviewsSection.module.scss';

const testimonialsData = [
  {
    text: "Працюю з вашою командою вже кілька місяців і не можу натішитися результатами! Контент став більш структурованим, а залученість зросла майже вдвічі. Окреме спасибі менеджеру Ані за терпіння та професійність. Рекомендую всім друзям 🫶",
    name: "Марина",
    image: "/testimonials/testimonials_1.jpg"
  },
  {
    text: "Ніколи не думала, що співпраця з агенцією буде такою простою та приємною. Завдяки вам, мій профіль виглядає стильно, а підписники стали активнішими. Дуже вдячна за підтримку та постійну комунікацію. Ви найкращі! 🌟",
    name: "Олена",
    image: "/testimonials/testimonials_2.jpg"
  },
  {
    text: "За місяць роботи я побачила прогрес, який не помічала роками! Команда вміє слухати та чути, що потрібно. Відчувається індивідуальний підхід, а не шаблонні рішення. Залишаюся з вами надовго ❤️",
    name: "Ірина",
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
        <h2 ref={ref}  className={`${styles.title} ${hasBeenVisible ? 'visible' : ''}`} >Відгуки наших моделей</h2>
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
