import TWITTER_LOGO_PATH from '../../shared/icons/twitter/twitter-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../shared/ui/Button';
import './WelcomePage.css';
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../../shared/routes';

export const WelcomePage = () => {
    const location = useLocation();

    return (
        <div className="welcome-page">
            <div className="welcome-page__preview"></div>
            <section className="welcome-page__join">
                <img
                    className="welcome-page__twitter-logo"
                    src={TWITTER_LOGO_PATH}
                    alt="twitter logo"
                />
                <h1 className="welcome-page__heading">Happening now</h1>
                <p className="welcome-page__description">Присоединиться</p>
                <Link
                    to={{ pathname: REGISTER_ROUTE }}
                    state={{ background: location }}
                >
                    <Button
                        type="primary"
                        extraClass="mb-14"
                    >Зарегистрироваться</Button>
                </Link>
                <Link
                    to={{ pathname: LOGIN_ROUTE }}
                    state={{ background: location }}
                >
                    <Button
                        type="secondary"
                        action={() => 1}
                    >Зарегистрироваться</Button>
                </Link>
            </section>
        </div>
    )
}