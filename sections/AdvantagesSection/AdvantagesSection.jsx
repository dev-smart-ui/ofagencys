import Card from '../../components/Card/Card';
import styles from './advantagesSection.module.scss';

const cardsData = [
    { title: "3 роки", subtitle: "досвіду" },
    { title: "35+", subtitle: "професіоналів у команді" },
    { title: "$35,400", subtitle: "середній міc. баланс" },
    { title: "109", subtitle: "моделей довіряють нам" }
];


export default function AdvantagesSection() {
  return (
    <div className="container">
        <div className={styles.advantagesList}>
            {cardsData.map((card, index) => (
                <Card 
                key={index} 
                title={card.title} 
                subtitle={card.subtitle} 
                />
            ))}
        </div>
        
        <div className={styles.advantagesBg}></div>
    </div>
  );
}
