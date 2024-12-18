import styles from './StepItem.module.scss';

export default function StepItem({ number, text}) {
    return (
        <div className={styles.stepItem}>
            <span>{number < 10 ? `0${number}` : number} </span>
            {text}
        </div>
    );
}
