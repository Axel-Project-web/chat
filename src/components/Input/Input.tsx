//react
import { ChangeEventHandler, HTMLInputTypeAttribute} from "react";

//styles
import styles from './Input.module.css';

//interface
interface PropertyType {
    name: string;
    value: string;
    label: string;
    error: string | null;
    placeholder?: string;
    Icon: React.JSX.Element;
    type: HTMLInputTypeAttribute;
    handleChange: ChangeEventHandler;
}

export function Input({
    
    name,
    Icon,
    error,
    value,
    label,
    placeholder,
    handleChange,
    type = "text",

}: PropertyType) {
    return (
        <div className = { styles.wrapper }>
            <label data-error = { error && true }  className = { styles.label }>
                { error || label }
            </label>
            <input
                data-error = { error && true }
                name = { name }
                type = { type } 
                value = { value }
                onChange = { handleChange }
                className = { styles.input } 
                placeholder = { placeholder }
            />
            <div className = { styles.icon_wrapper }>
                { Icon && Icon }
            </div>
        </div>
    )
}