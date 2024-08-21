//react
import { MouseEventHandler } from 'react';

//styles
import styles from './styles.module.css'

//interface
interface PropertiesType {
    label: string;
    onClick?: MouseEventHandler;
    type?: "button" | "submit" | "reset";
}

export function Button({
    label,
    type = "button",
    onClick = undefined,
}: PropertiesType) {
    return (
        <button type = { type } onClick = { onClick } className = { styles.button }>
            { label }
        </button>
    )
}