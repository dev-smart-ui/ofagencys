import styles from './Card.module.scss';

export default function Card({ title, subtitle }) {  
  return (
    <div  className={styles.card}>
      <div className={styles.title}>{title}</div>
      <p>{subtitle}</p>
    </div>
  );
}
