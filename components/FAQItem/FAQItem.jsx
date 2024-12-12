import Image from 'next/image';
import styles from './faqItem.module.scss';

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
      <div className={styles.questionBlock} onClick={onToggle}>
        <Image 
          src="/elements/faqIcon.svg" 
          alt="FAQ Icon" 
          width={31} 
          height={40} 
          className={styles.icon}
        />
        <span className={styles.question}>{question}</span>
        <span className={styles.toggleIcon}>{isOpen ? '-' : '+'}</span>
      </div>
      <div className={`${styles.answerBlock} ${isOpen ? styles.open : ''}`}>
        {answer}
      </div>
    </div>
  );
}
