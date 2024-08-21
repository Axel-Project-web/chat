//styles
import styles from './Icon.module.css';

//interface
interface PropsType {
    alt?: string;
    icon?: string;
}

function Icon({ icon, alt }:PropsType): React.ReactElement {
    return (
        <img className = { styles.icon } src = { icon } alt = { alt }/>
    )
}

export {
    Icon
}