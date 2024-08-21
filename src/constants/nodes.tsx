import document_icon from '../assets/icons/document-icon.svg'
import document_icon_white from '../assets/icons/document-icon-white.svg';
import user_icon from '../assets/icons/user-icon.svg'
import user_icon_white from '../assets/icons/user-icon-white.svg'
import eye_icon from '../assets/icons/eye-icon.svg';
import eye_icon_white from '../assets/icons/eye-icon-white.svg';
import email_icon from '../assets/icons/email-icon.svg';
import email_icon_white from '../assets/icons/email-icon-white.svg';

const NODES = [
    {
        path: "/register",
        source: {
            desactive: document_icon,
            active: document_icon_white,
        }
    },
    {
        path: "/register/username",
        source: {
            desactive: user_icon,
            active: user_icon_white,
        }
    },
    {
        path: "/register/email",
        source: {
            desactive: email_icon,
            active: email_icon_white,
        }
    },
    {
        path: "/register/password",
        source: {
            desactive: eye_icon,
            active: eye_icon_white
        }
    }
]

export { NODES }