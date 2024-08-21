//styles
import styles from './styles.module.css';

//icons
import close_icon from '../../assets/icons/close-icon.svg';

//react
import { useState, useEffect, MouseEventHandler } from 'react';

//interface
interface PropertiesType {
    title?: string;
    content: string;
    isVisible: boolean;
    handleClick: MouseEventHandler<HTMLButtonElement>
}

function Alert( { title, content, isVisible, handleClick }: PropertiesType ) {

    const [visible, setVisible] = useState< boolean >( false );

    useEffect(() => setVisible( isVisible ), [ isVisible ]);

    return (
        <div data-visible = { visible } className = { styles.wrapper }>
            <button onClick = { handleClick } className = { styles.button }>
                <img src = { close_icon } alt = 'close icon'/>
            </button>
            <h3 className = {styles.title}>{ title }</h3>
            <span className = { styles.content }>{ content }</span>
        </div>
    )
}

export { Alert };