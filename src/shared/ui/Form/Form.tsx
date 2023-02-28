import { Fragment } from 'react';
import { Button } from '../Button';
import './Form.css';

type Props = {
    formTitle: string;
    btnText: string;
    onSubmit: () => void;
    isRegister?: boolean;
};

export const Form = ({ formTitle, btnText, onSubmit, isRegister = false }: Props) => {
    return (
        <form onSubmit={onSubmit} className="form">
            <h2 className="form__title">{formTitle}</h2>
            <label className="form__label" htmlFor="name">Ваше имя</label>
            <input className="form__input" id="name" type="text" />
            <label className="form__label" htmlFor="name">Ваша почта</label>
            <input className="form__input" id="name" type="email" />
            <label className="form__label" htmlFor="name">Ваш пароль</label>
            <input className="form__input" id="name" type="password" />
            {isRegister &&
                <Fragment>
                    <label className="form__label" htmlFor="avatar">Ссылка на аватар</label>
                    <input className="form__input" id="avatar" type="text" />
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