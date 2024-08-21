//icon
import user_icon from '../../assets/icons/user-icon.svg';

//components
import { Form } from '../../components/Form/Form';
import { Icon } from '../../components/Icon/Icon';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

//constant
const EMPTY_FIELD_TEXT = "";

//regexp
import { regexp } from '../../constants/regexp';

//react
import { useContext, ChangeEvent, useState, FormEvent } from 'react';

//context
import { RegisterContext } from '../../context/RegisterContext';

export function UserForm() {

    //hooks
    const { updateState, username } = useContext(RegisterContext);
    const [text, setText] = useState<string>( username );
    const [error, setError] = useState<null | string>( null );

    //handlers
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if( text ===  EMPTY_FIELD_TEXT) return setError("Empty can't be empty");
        updateState({ name: "username", value: text });
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        if( !regexp.alphanumeric.test( value ) ) setError(`Invalid userame.`);
        else setError( null );
        setText( value );
    }

    return (
        <Form 
            handleSubmit = { handleSubmit }
            title = "Creating user"
            description = "Choose your own username. This will be the name by which other users will be able to search for you and add you to their contacts."
        >
            <Input 
                type = "text"
                error = { error }
                name = "username"
                label = "username"
                value = { text }
                handleChange = { handleChange }
                Icon = { <Icon icon = { user_icon }/> }
                placeholder = "Example.123 - length (5, 20) characters"
            />
            <Button
                type = "submit"
                label = "Verify"
            />
        </Form>
    )
}