import { ChangeEvent, Fragment, useState } from 'react';
import { Form } from '../../shared/ui/Form';
import { FormInput } from '../../shared/ui/FormInput';
import './Login.css';

export const Login = () => {
    const [, setUser] = useState({
        email: '',
        password: ''
    });

    const setEmail = (evt: ChangeEvent<HTMLInputElement>) => setUser(
        (prevState) => ({
            ...prevState,
            email: evt.target.value
        })
    );

    const setPassword = (evt: ChangeEvent<HTMLInputElement>) => setUser(
        (prevState) => ({
            ...prevState,
            password: evt.target.value
        })
    );

    return (
        <Form
            formTitle="Авторизоваться"
            btnText="Авторизация"
            onSubmit={() => 1}
        >
            <Fragment>
                <FormInput
                    label='Ваша почта'
                    onChange={setEmail}
                    name='email'
                    type='email'
                />
                <FormInput
                    label='Ваш пароль'
                    onChange={setPassword}
                    name='password'
                    type='password'
                />
            </Fragment>
        </Form>
    )
}