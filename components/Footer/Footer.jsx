import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
       <p>Copyright © {new Date().getFullYear()} OnlyDiamant</p>
       <div className={styles.bg}></div>
    </footer>
  );
}