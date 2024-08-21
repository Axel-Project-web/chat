//icon
import email_icon from '../../assets/icons/email-icon.svg';

//components
import { Icon } from '../../components/Icon/Icon';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

//react
import { useContext, useState, FormEvent, ChangeEvent } from 'react';

//context
import { RegisterContext } from '../../context/RegisterContext';

//regexp
import { regexp } from '../../constants/regexp';

//components
import { Form } from '../../components/Form/Form';

//constant
const EMPTY_FIELD_TEXT = "";

export function EmailForm() {
    //hooks
    const { updateState, email, goToNextRoute } = useContext( RegisterContext );
    const [error, setError] = useState<string | null>(null);
    const [text, setText] = useState<string>( email );

    //handlers
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if( error ) return;
        if( text === EMPTY_FIELD_TEXT ) return setError("Field can't be empty.");
        updateState({ name: 'email', value: text });
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        if( !regexp.email.test( value ) ) setError("Invalid email.")
        else setError( null );
        setText( value );
    }

    return (
        <Form
        title = "Register your email"
        handleSubmit = { handleSubmit }
            description = "With gmail we can be sure that it is a person who is trying to access our messaging services."
        >
            <Input 
                type = "text"
                name = "email"
                label = "email"
                value = { text }
                error = { error }
                handleChange = { handleChange }
                Icon = { <Icon icon = { email_icon }/> }
                placeholder = "Something.123@gmail.com - only gmail"
            />
            <Button
                type = "submit"
                label = "Verify email"
            />
        </Form>
    )
}