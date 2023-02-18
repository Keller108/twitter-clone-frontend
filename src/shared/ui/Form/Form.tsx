import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './Form.css';

type Props = {
    formTitle: string;
    btnText: string;
    onSubmit: () => void;
    redirectLink: string;
};

export const Form = ({ formTitle, btnText, onSubmit, redirectLink }: Props) => {
    return (
        <form onSubmit={onSubmit} className="form">
            <h2 className="form__title">{formTitle}</h2>
            <label className="form__label" htmlFor="name">Ваше имя</label>
            <input className="form__input" id="name" type="text" />
            <label className="form__label" htmlFor="name">Ваша почта</label>
            <input className="form__input" id="name" type="email" />
            <label className="form__label" htmlFor="name">Ваш пароль</label>
            <input className="form__input" id="name" type="password" />
            <Button
                type="primary"
                actionType="submit"
            >
                {btnText}
            </Button>
            <p className="form__link">Уже Зарегистрированы?<br/>
                <Link
                    to={redirectLink}
                >Войти</Link>
            </p>
        </form>
    )
}