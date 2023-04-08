import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { setCurrentUser } from '../../services/actions/user';
import { useDispatch, useSelector } from '../../shared/hooks';
import { Form } from '../../shared/ui/Form';
import { FormInput } from '../../shared/ui/FormInput';
import './Login.css';

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { users } = useSelector(store => store.userStore);

    const dispatch = useDispatch();

    console.log('users', users);

    const onFormSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        let userExists = users.find((usr) => usr.email === user.email);
        if (userExists) {
            dispatch(setCurrentUser(userExists));
        }
        console.log('userExists', userExists);
    };

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
            onSubmit={onFormSubmit}
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