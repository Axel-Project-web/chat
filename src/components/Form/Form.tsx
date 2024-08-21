//styles
import styles from './form.module.css';

//react
import { PropsWithChildren, FormEventHandler } from 'react';

//interface
interface PropertyType {
    title: string;
    description: string;
    handleSubmit: FormEventHandler;
}

export function Form({
    title,
    children,
    description,
    handleSubmit
}: PropsWithChildren<PropertyType>) {
    return (
        <form onSubmit = { handleSubmit} className = { styles.form }>
            <div>
                <h1 className = { styles.title }>{ title }</h1>
                <p className = { styles.text }>
                    { description }
                </p>
            </div>
            {
                children
            }
        </form>
    )
}