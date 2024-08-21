//react
import { MouseEvent } from 'react';

//styles
import styles from './IconButton.module.css';

//interfaces
interface PropsType {
    icon?: string;
    action?: ()=> void;
    type?: "button" | "submit" | "reset";
}

function IconButton({
    type,
    icon,
    action
}: PropsType): React.ReactElement {

    const handleClick = (event: MouseEvent<HTMLButtonElement>)=> {
        event.stopPropagation();
        if(action) action();
    }
    
    return (
        <button type = { type } className = { styles.button } onClick = { handleClick }>
            <img className = { styles.icon } alt = 'icon button' src = { icon } />
        </button>
    )
}

export {
    IconButton
}