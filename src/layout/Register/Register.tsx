//react
import { useContext, useEffect } from "react";

//react-router-dom
import { useLocation, Outlet, useNavigate } from "react-router-dom";

//styles
import styles from './styles.module.css';

//icons
import arrow_icon from '../../assets/icons/arrow-icon.svg';

//components
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";

//constants
import { NODES } from "../../constants/nodes";

//context
import { RegisterContext } from "../../context/RegisterContext";

function Register() {

    //hooks    
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { currentPath, goToPrevRoute } = useContext(RegisterContext);

    useEffect(()=> {
        if( pathname !== currentPath ) navigate( currentPath );
    }, []);

    return (
        <div className = { styles.page }>
            <div className = { styles.wrapper }>
                <button onClick = { goToPrevRoute } className = { styles.backButton }>
                    <img className = { styles.icon } src = { arrow_icon } alt = 'arrow icon'/>
                    <span>back</span>
                </button>
                <ProgressBar
                    nodes = { NODES }
                    currentPath = { pathname }
                />
                <Outlet/>
            </div>
        </div>
    )
}

export { Register };