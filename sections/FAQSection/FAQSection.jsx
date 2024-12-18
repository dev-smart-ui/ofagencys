"use client";

import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import FAQItem from '@/components/FAQItem/FAQItem';
import styles from './FAQSection.module.scss';

const faqData = [
  {
    question: "Коли я зможу побачити перші зміни у результатах?",
    answer: "Все залежить від твоєї активності у створенні контенту та слідуванні рекомендаціям. Перші прибутки можна помітити вже через кілька тижнів. Якщо в тебе є існуюча аудиторія, позитивні зміни будуть помітні навіть у перші дні роботи. Для тих, хто вже заробляє $1500–$3500, дохід може зрости в 2–3 рази вже за перший місяць."
  },
  {
    question: "Скільки часу потрібно приділяти роботі щодня?",
    answer: "Достатньо виділяти від 1 до 4 годин на день, залежно від рівня активності. Чим більше ти взаємодієш із підписниками, тим більше часу може знадобитися. Однак усі зусилля швидко окупаються, оскільки твоя робота приносить реальний дохід."
  },
  {
    question: "Як залишатися анонімним і захистити свою особистість?",
    answer: "Ми дуже серйозно ставимося до конфіденційності. Допоможемо тобі вибрати псевдонім, налаштувати рекламу на країни Tier 1 (США, Австралія, Канада) і обмежити доступ до акаунта для країн, які ти вкажеш."
  },
  {
    question: "Чи потрібно робити дорогі професійні фотосесії?",
    answer: "Ні, це зовсім не обов’язково. Досвід показує, що фото, зроблені на телефон, можуть бути навіть ефективнішими. Наша команда допоможе тобі створити якісний і привабливий контент для підписників."
  },
  {
    question: "Що робити, якщо я ще не створив акаунт на OnlyFans?",
    answer: "Не хвилюйся, ми повністю допоможемо тобі на старті. Наші спеціалісти створять акаунт з нуля та підтримають тебе на кожному кроці. Разом ми досягнемо твоїх цілей та бажаних результатів!"
  }
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
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <h2 ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>Поширені запитання</h2>
            <p ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>Якщо ви знайшли відповіді на свої запитання в розділі FAQ і готові розпочати співпрацю з нами, ми будемо раді допомогти вам на кожному етапі! Ми пропонуємо повний спектр послуг, щоб ваш профіль на OnlyFans став успішним і приносив стабільний дохід. Наша команда розробить для вас індивідуальну стратегію, яка включає оформлення, залучення підписників, та багато іншого.</p>
          </div>

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
        </div>
      </div>
    </section>
  );
}
