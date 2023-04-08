import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../services/actions/user';
import { useDispatch, useSelector } from '../../shared/hooks';
import { HOME_ROUTE } from '../../shared/routes';
import { Form } from '../../shared/ui/Form';
import { FormInput } from '../../shared/ui/FormInput';
import './Login.css';

export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { users, userCreateSuccess } = useSelector(store => store.userStore);

    const dispatch = useDispatch();

    const onFormSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        let userExists = users.find((usr) => usr.email === user.email);
        if (userExists) {
            dispatch(setCurrentUser(userExists));
        }
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

    useEffect(() => {
        if (userCreateSuccess) navigate(HOME_ROUTE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userCreateSuccess])

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