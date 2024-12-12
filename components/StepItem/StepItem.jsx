import styles from './stepItem.module.scss';

export default function StepItem({ number, text, align }) {
    return (
        <div className={`${styles.stepItem} ${styles[align]}`}>
            {number < 10 ? `0${number}` : number} {text}
        </div>
    );
}
