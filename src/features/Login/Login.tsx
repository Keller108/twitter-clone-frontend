import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../shared/routes';
import { Form } from '../../shared/ui/Form';
import './Login.css';

export const Login = () => {
    const navigate = useNavigate();
    return (
        <Form
            formTitle="Авторизоваться"
            btnText="Авторизация"
            onSubmit={() => navigate(HOME_ROUTE)}
        />
    )
}