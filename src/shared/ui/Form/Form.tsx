import { ChangeEvent, Fragment, useState } from 'react';
import { createUser } from '../../../services/actions/user';
import { useDispatch, useSelector } from '../../hooks';
import { Button } from '../Button';
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
            <label className="form__label" htmlFor="name">Ваше имя</label>
            <input
                onChange={setName}
                className="form__input"
                id="name"
                type="text"
            />
            <label className="form__label" htmlFor="name">Ваша почта</label>
            <input
                onChange={setEmail}
                className="form__input"
                id="name"
                type="email"
            />
            <label className="form__label" htmlFor="name">Ваш пароль</label>
            <input
                onChange={setPassword}
                className="form__input"
                id="name"
                type="password"
            />
            {isRegister &&
                <Fragment>
                    <label className="form__label" htmlFor="avatar">Ссылка на аватар</label>
                    <input
                        onChange={setAvatar}
                        className="form__input"
                        id="avatar"
                        type="text"
                    />
                </Fragment>
            }
            <Button
                type="primary"
                actionType="submit"
            >
                {btnText}
            </Button>
        </form>
    )
}