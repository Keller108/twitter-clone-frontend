import { Button } from '../Button';
import './Form.css';

type Props = {
    title: string;
};

export const Form = ({ title }: Props) => {
    return (
        <form className="form">
            <h2 className="form__title">{title}</h2>
            <label className="form__label" htmlFor="name">Ваше имя</label>
            <input className="form__input" id="name" type="text" />
            <label className="form__label" htmlFor="name">Ваша почта</label>
            <input className="form__input" id="name" type="email" />
            <label className="form__label" htmlFor="name">Ваш пароль</label>
            <input className="form__input" id="name" type="password" />
            <Button type="primary">Регистрация</Button>
            <p className="form__link">Уже Зарегистрированы?<br/>Войти</p>
        </form>
    )
}