"use client";

import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import FAQItem from '@/components/FAQItem/FAQItem';
import styles from './FAQSection.module.scss';

const faqData = [
  { question: "Коли я зможу побачити перші результати?", answer: "Результати залежать від твоєї активності у створенні контенту та дотримання рекомендацій. Ми гарантуємо, що перший дохід можна отримати вже через кілька тижнів. Якщо сторінка вже має підписників, успіхи можна побачити навіть у перший тиждень роботи. А для тих, хто вже заробляє $1500–$3500, дохід збільшується в 2–3 рази протягом першого місяця."  },
  { question: "Скільки часу треба приділяти роботі щодня?", answer: "Достатньо 1–4 годин на день, залежно від активності. Якщо ти багато спілкуєшся з фанатами, час може трохи збільшитися. Всі зусилля повністю окупаються, адже твій час буде приносити дохід." },
  { question: "Як убезпечити себе і залишитися анонімним?", answer: "Ми розуміємо важливість конфіденційності й зробимо все можливе для її захисту. Ми допоможемо тобі обрати псевдонім, налаштуємо рекламу в країнах Tier 1 (США, Австралія, Канада) та заблокуємо доступ до сторінки з країн, які ти вкажеш." },
  { question: "Чи потрібно інвестувати у професійну зйомку?", answer: "Ні, це не обов’язково. Досвід показує, що фото, зроблені на телефон, можуть бути навіть ефективнішими. Наші фахівці допоможуть створити якісний контент, який приверне увагу підписників." },
  { question: "Що робити, якщо у мене ще немає акаунта на OnlyFans?", answer: "Ми з радістю допоможемо тобі розпочати. Команда експертів створить акаунт з нуля та супроводжуватиме тебе на кожному етапі. Разом ми досягнемо бажаних результатів!" },
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
