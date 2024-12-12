import React, {FC, InputHTMLAttributes, useState} from 'react';

import styles from './form.module.scss'
import {DeepRequired, FieldErrorsImpl, FieldValues, GlobalError, useForm} from "react-hook-form";

export const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (data) => {
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
        } catch (error) {
            alert(error)
            console.error('Error while sending message:', error.message);
        }
        setIsLoading(false)
    };
    const formProps = {register ,errors }
    return <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
                <InputLine  id={"name"} label={"Твоє ім'я:"}  formProps={formProps} autocomplete="name" />
                <InputLine id={"telegram"} label={"Твій нік у телеграм:"}  formProps={formProps} autocomplete="telegram-username"/>
                <InputLine id={"phone"} label={"Твій номер телефону:"}   type="tel"
                           inputMode="numeric"
                           pattern="^\+?[0-9]*$"
                           autocomplete="tel"
                           placeholder="+380763125232" formProps={formProps}/>

            <button className={styles.button} disabled={isLoading}  type="submit"> send  </button>
        </form>
    </div>
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
      <span style={hasError?{color:"red"}:{}}> {label}</span>
        <input {...formProps.register(id, {required})   } {...rest}/>
        {formProps.errors?.[id] && <span>Це поле є обов'язковим для заповнення</span>}
    </label>
}