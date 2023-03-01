import { ChangeEvent, useState } from 'react';
import { createUser } from '../../../services/actions/user';
import { useDispatch } from '../../hooks';
import { Button } from '../Button';
import { FormInput } from '../FormInput';
import './Form.css';

type Props = {
    formTitle: string;
    btnText: string;
    onSubmit: () => void;
    children: JSX.Element;
};

export const Form = ({ formTitle, btnText, onSubmit, children }: Props) => {
    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: '',
        avatar: ''
    });

    const dispatch = useDispatch();

    const setName = (evt: ChangeEvent<HTMLInputElement>) => setUser((prevState) => ({
        ...prevState,
        userName: evt.target.value
    }));

    const setEmail = (evt: ChangeEvent<HTMLInputElement>) => setUser((prevState) => ({
        ...prevState,
        email: evt.target.value
    }));

    const setPassword = (evt: ChangeEvent<HTMLInputElement>) => setUser((prevState) => ({
        ...prevState,
        password: evt.target.value
    }));

    const setAvatar = (evt: ChangeEvent<HTMLInputElement>) => setUser((prevState) => ({
        ...prevState,
        avatar: evt.target.value
    }));

    const onFormSubmit = () => {
        dispatch(createUser(user));
    };

    return (
        <form onSubmit={onSubmit} className="form">
            <h2 className="form__title">{formTitle}</h2>
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
            <Button
                type="primary"
                actionType="submit"
            >
                {btnText}
            </Button>
        </form>
    )
}