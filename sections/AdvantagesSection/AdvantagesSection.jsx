import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Card from '../../components/Card/Card';
import styles from './advantagesSection.module.scss';

const cardsData = [
    { title: "3 роки", subtitle: "досвіду" },
    { title: "35+", subtitle: "професіоналів у команді" },
    { title: "$35,400", subtitle: "середній міc. баланс" },
    { title: "109", subtitle: "моделей довіряють нам" }
];


export default function AdvantagesSection() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);


  return (
    <div className="container">
        <div ref={ref} className={`${styles.advantagesList} ${hasBeenVisible ? styles.visible : ''}`}>
            {cardsData.map((card, index) => (
                <Card 
                key={index} 
                title={card.title} 
                subtitle={card.subtitle} 
                />
            ))}
        </div>
    </div>
  );
}
