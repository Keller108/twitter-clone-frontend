import { Form } from '../../shared/ui/Form';
import './Register.css';

export const Register = () => {
    return (
        <Form
            formTitle="Зарегистрироваться"
            btnText="Регистрация"
            onSubmit={() => 1}
            isRegister={true}
        />
    )
}