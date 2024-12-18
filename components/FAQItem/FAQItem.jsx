import styles from './FAQItem.module.scss';

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
      <div className={styles.questionBlock} onClick={onToggle}>
        <span className={styles.question}>{question}</span>
        <span className={styles.toggleIcon}>{isOpen ? '-' : '+'}</span>
      </div>
      <div className={`${styles.answerBlock} ${isOpen ? styles.open : ''}`}>
        {answer}
      </div>
    </div>
  );
}
