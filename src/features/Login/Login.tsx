import { Form } from '../../shared/ui/Form';
import './Login.css';

export const Login = () => {
    return (
        <Form
            formTitle="Авторизоваться"
            btnText="Авторизация"
            onSubmit={() => 1}
        />
    )
}