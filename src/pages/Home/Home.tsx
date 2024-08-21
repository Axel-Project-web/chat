//react-router-dom
import { Link } from "react-router-dom";

//icons
import user_icon from '../../assets/icons/user-icon-white.svg';
import add_user_icon from '../../assets/icons/add-user-icon-white.svg';

//styles
import styles from './styles.module.css';

function Home() {


    return (
        <div className = { `${ styles.wrapper } ${ styles.center }` }>
            <h1 className = { styles.title }>This is a chat</h1>
            <p className = { styles.description }>I don't know what else to put here.</p>
            <div className = { styles.keyboard }>
                <Link to = "/login" className = { `${ styles.button } ${ styles.center }` }>
                    <span className = { `${ styles.tag } ${ styles.center }` }>login</span>
                    <img className = { styles.icon } src = { user_icon } alt = 'icon'/>
                    <p className = { styles.text }>access</p>
                </Link>
                <hr className = { styles.divider } />
                <Link to = "/register" className = { `${ styles.button } ${ styles.center }` }>
                    <span className = { `${ styles.tag } ${ styles.center }` }>sign up</span>
                    <img className = { styles.icon } src = { add_user_icon } alt = 'icon'/>
                    <p className = { styles.text }>register</p>
                </Link>
            </div>
        </div>
    )
}

export { Home }