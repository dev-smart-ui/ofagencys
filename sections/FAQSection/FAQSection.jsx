"use client";

import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import FAQItem from '@/components/FAQItem/FAQItem';
import styles from './faqSection.module.scss';

const faqData = [
  {
    question: "Як мені зберегти анонімність?",
    answer: (
      <>
        Найчастіше це залежить від твоєї присутності та залученості у створенні контенту за запитом нашого контент-менеджера. Від себе ми гарантуємо перший дохід протягом перших кількох тижнів.

        Якщо сторінка вже мала певну кількість підписників, то результату можемо досягти вже в перший тиждень роботи.

        Для тих, хто заробляв 1500$ - 3500$, ми зазвичай збільшуємо дохід в 2-3 рази протягом першого місяця і продовжуємо зростати такими темпами

        Якщо ти хоче отримати такі ж результати - тисни <a href="#"> тут</a> і подавай заявку вже зараз
      </>
    )
  },
  { question: "Скільки часу в день потрібно працювати?", answer: "Відповідь: Оптимально..." },
  { question: "Як мені зберегти анонімність?", answer: "Відповідь: Для збереження анонімності..." },
  { question: "Чи потрібно мені робити професійні фото/відео?", answer: "Відповідь: Професійний контент..." },
  { question: "В мене немає створеного акаунту OnlyFans. Чи можемо ми працювати разом?", answer: "Відповідь: Так, ми можемо допомогти..." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const { ref, inView } = useInView({ threshold: 0.2 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);


  return (
    <section className={styles.faqSection} id="faq">
      <div className="container">
        <h2 ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>Поширені запитання</h2>
        <p ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>Найчастіші запитання та відповіді на них</p>
        
        <div ref={ref}  className={`${styles.faqList}  ${hasBeenVisible ? 'visible' : ''}`}>
          {faqData.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className={styles.faqBg}></div>
      </div>
    </section>
  );
}
