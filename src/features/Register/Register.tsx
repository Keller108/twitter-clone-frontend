import { LOGIN_ROUTE } from '../../shared/routes';
import { Form } from '../../shared/ui/Form';
import './Register.css';

export const Register = () => {
    return (
        <Form
            formTitle="Зарегистрироваться"
            btnText="Регистрация"
            onSubmit={() => 1}
            redirectLink={LOGIN_ROUTE}
        />
    )
}