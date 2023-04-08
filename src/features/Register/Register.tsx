import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import { modalClose } from '../../services/actions/modal';
import { createUser } from '../../services/actions/user';
import { useDispatch, useSelector } from '../../shared/hooks';
import { Form } from '../../shared/ui/Form';
import { FormInput } from '../../shared/ui/FormInput';
import './Register.css';

export const Register = () => {
    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: '',
        avatar: ''
    });
    const { registerSuccess } = useSelector(store => store.userStore);
    const dispatch = useDispatch();

    const setName = (evt: ChangeEvent<HTMLInputElement>) => setUser(
        (prevState) => ({
            ...prevState,
            userName: evt.target.value
        })
    );

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

    const setAvatar = (evt: ChangeEvent<HTMLInputElement>) => setUser(
        (prevState) => ({
            ...prevState,
            avatar: evt.target.value
        })
    );

    const onFormSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        dispatch(createUser(user));
    };

    useEffect(() => {
        if (registerSuccess === true) {
            dispatch(modalClose());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [registerSuccess])

    return (
        <Form
            formTitle="Зарегистрироваться"
            btnText="Регистрация"
            onSubmit={onFormSubmit}
        >
            <Fragment>
                <FormInput
                    label='Ваше имя'
                    onChange={setName}
                    name='name'
                    type='text'
                />
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
                <FormInput
                    label='Ссылка на аватар'
                    onChange={setAvatar}
                    name='avatar'
                    type='text'
                />
            </Fragment>
        </Form>
    )
};