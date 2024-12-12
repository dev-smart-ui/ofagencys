import { useState, useEffect } from 'react';

import styles from './header.module.scss';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${isActive ? styles.active : ''}`}>
      <nav className={styles.nav}>
        <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')}>
          Про нас
        </a>
        <a href="#reviews" onClick={(e) => handleScrollToSection(e, 'reviews')}>
          Відгуки
        </a>
        <a href="#faq" onClick={(e) => handleScrollToSection(e, 'faq')}>
          FAQ
        </a>
      </nav>
    </header>
  );
}
