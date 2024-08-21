//styles
import styles from './Error.module.css';

//icon
import error_icon from '../../assets/icons/error-icon.svg';

function Error () {
    return (
        <div className = { styles.wrapper }>
            <img className = { styles.icon } src= { error_icon } alt="error" />
            <h1 className = { styles.title }>Error.</h1>
            <p className = { styles.message }>La ruta que busca no existe.</p>
        </div>
    )
}

export { Error }