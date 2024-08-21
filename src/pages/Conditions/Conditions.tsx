//styles
import styles from './styles.module.css';

//components
import { Button } from '../../components/Button/Button';

//context
import { RegisterContext } from '../../context/RegisterContext';

//react
import { useContext } from 'react';

export function Condition() {

    //hooks
    const { updateState } = useContext( RegisterContext );

    //handlers
    function handleClick() {
        updateState({ name: 'agree', value: true });
    }

    return (
        <form className = { styles.form }>
            <div className = { styles.wrapper }>
                <h2 className = { styles.title }>
                    Terms & Conditions
                </h2>
                <p className = { styles.text }>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus in vitae, doloribus, cum exercitationem atque sunt nulla provident illo sequi ipsam sed odit magni sint saepe totam maxime! Officiis, dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis eaque quam odio, doloribus cum necessitatibus exercitationem dolor aperiam ratione explicabo dolore quas dolorum inventore sapiente officiis vero dolorem neque. Minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum eaque. Veniam dolorem voluptas quisquam necessitatibus quod, error corporis esse officiis quibusdam vero repudiandae ea explicabo qui blanditiis magni excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit veritatis numquam exercitationem labore soluta, porro alias temporibus voluptas ad doloribus eveniet, magnam recusandae accusantium deleniti, doloremque placeat minima provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita dolor alias neque ipsa unde assumenda saepe. Impedit dolorum nam enim sunt asperiores officiis esse, consectetur expedita tempora facilis deserunt!
                </p>
            </div>
            <Button 
                type = "button"
                onClick = { handleClick }
                label = "Accept and continue"  
            />
        </form>
    )
}