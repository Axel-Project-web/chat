//icons
import eye_icon from '../../assets/icons/eye-icon.svg';

//components
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { IconButton } from '../../components/IconButton/IconButton';

//react
import { useContext } from 'react';

//component
import { Form } from '../../components/Form/Form';

//context
import { RegisterContext } from '../../context/RegisterContext';

export function PasswordForm() {

    const { goToNextRoute } = useContext(RegisterContext);

    return (
        <Form
            title = "Creating password"
            description = "Make sure your password is known only to you. Use combinations of upper and lower case, special characters such as (_) or (.), and also add numbers."
        >
            <Input 
                type = "password"
                name = "password"
                label = "password"
                handleChange = { ()=> {} }
                placeholder = "Exam_ple.321 - length (5 - 20) characters"
                Icon = { <IconButton icon = { eye_icon } action = {()=> {}} type = "button"/> }
            />
            <Input 
                type = "password"
                name = "repeatPassword"
                label = "repeat password"
                handleChange = { ()=> {} }
                placeholder = "Exam_ple.321 - length (5 - 20) characters"
                Icon = { <IconButton icon = { eye_icon } action = {()=> {}} type = "button"/> }
            />
            <Button
                type = "button"
                label = "Verify email"
                onClick = { goToNextRoute }
            />
        </Form>
    )
}