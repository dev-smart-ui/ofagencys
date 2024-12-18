import React, { FC, InputHTMLAttributes, useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import styles from './formSection.module.scss';
import { useForm } from 'react-hook-form';

export const Form = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (inView) setHasBeenVisible(true);
  }, [inView]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      setIsSuccess(false);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Помилка відправки форми');

      setIsSuccess(true);
      reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 10000);
    } catch (error: any) {
      alert(error?.message || 'Щось пішло не так');
    } finally {
      setIsLoading(false);
    }
  };

  const formProps = { register, errors };

  return (
    <section ref={ref} id="form" className={`${styles.formSection} ${hasBeenVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <Image src="/hero_bg.jpg" alt="Фон з дівчиною" width={2400} height={1600} className={styles.heroBg} />
            <h2 className={`${hasBeenVisible ? 'visible' : ''}`}>Зв'яжіться з нами</h2>
            <p>
              Ми раді отримати ваше повідомлення! Будь ласка, заповніть форму нижче, і наша команда зв'яжеться з вами якнайшвидше
            </p>
          </div>

          <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputLine id="name" label="Твоє ім'я:" placeholder="Ім'я" formProps={formProps} autoComplete="name" />
              <InputLine id="telegram" label="Твій нік у телеграм:" placeholder="@Name" formProps={formProps} autoComplete="telegram-username" />
              <InputLine id="phone" label="Твій номер телефону:" type="tel" inputMode="numeric" autoComplete="tel" placeholder="+380763125232" formProps={formProps} />

              <button className={styles.button} disabled={isLoading} type="submit">
                {isLoading ? (
                  <>
                    Відправка...
                    <Image src="/elements/loader.svg" alt="Loading" width={20} height={20} className={styles.spinner} />
                  </>
                ) : (
                  <>
                    Відправити
                    <Image src="/elements/arrowRight.svg" alt="Стрілка вправо" width={24} height={24} />
                  </>
                )}
              </button>
            </form>

            {isSuccess && <div className={styles.successMessage}>Форму успішно відправлено!</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

type TInputProps = {
  formProps: { register: any; errors: any };
  id: string;
  label: string;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const InputLine: FC<TInputProps> = ({ formProps, id, label, required = true, ...rest }) => {
  const hasError = formProps.errors?.[id];
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <input {...formProps.register(id, { required })} {...rest} />
      {hasError && <div className={styles.errorMessage}>Це поле є обов'язковим для заповнення</div>}
    </label>
  );
};
