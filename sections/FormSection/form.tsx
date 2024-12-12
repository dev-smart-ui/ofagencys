import React, {FC, InputHTMLAttributes, useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './formSection.module.scss'
import {DeepRequired, FieldErrorsImpl, FieldValues, GlobalError, useForm} from "react-hook-form";

export const Form = () => {
    const { ref, inView } = useInView({ threshold: 0.1 });
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
        if (inView) {
          setHasBeenVisible(true);
        }
    }, [inView]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (data:any) => {
        try {
            setIsLoading(true)
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Something went wrong');
            }

            const result = await response.json();
            console.log('Message sent successfully:', result);
        } catch (error:any) {
            alert(error?.message)
            console.error('Error while sending message:', error.message);
        }
        setIsLoading(false)
    };
    const formProps = {register ,errors }
    return <section id='form' className={styles.formSection}>
        <div className='container'>
            <h2 ref={ref}  className={`${hasBeenVisible ? 'visible' : ''}`}>Залиш заявку і наш менеджер зв'яжеться з тобою </h2>

            <div ref={ref} className={`${styles.form} ${hasBeenVisible ? 'visible' : ''}`}>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <InputLine  id={"name"} label={"Твоє ім'я:"} placeholder="Ім'я"  formProps={formProps} autoComplete="name" />
                        <InputLine id={"telegram"} label={"Твій нік у телеграм:"} placeholder="@Name"  formProps={formProps} autoComplete="telegram-username"/>
                        <InputLine id={"phone"} label={"Твій номер телефону:"}   type="tel"
                                inputMode="numeric"
                                pattern="^\+?[0-9]*$"
                                autoComplete="tel"
                                placeholder="+380763125232" formProps={formProps}/>

                    <button className={styles.button} disabled={isLoading}  type="submit"> send  </button>
                </form>
            </div>
        </div>
    
    </section> 
};

type TInputProps = {
    formProps:{
        register: any
        errors: any
    },
    id:string,
    label:string
    required?:boolean
}& InputHTMLAttributes<HTMLInputElement>;
const InputLine:FC<TInputProps> = ({formProps , id  , label , required=true ,...rest   })=>{
    const hasError = formProps.errors?.[id]
    return <label className={styles.label} >
      <span> {label}</span>
        <input {...formProps.register(id, {required})   } {...rest}/>
        {formProps.errors?.[id] && <div style={hasError?{color:"red"}:{}} className={styles.errorMessage}>Це поле є обов'язковим для заповнення</div>}
    </label>
}