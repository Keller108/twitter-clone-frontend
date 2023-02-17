import TWITTER_LOGO_PATH from '../../shared/icons/twitter/twitter-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../shared/ui/Button';
import './WelcomePage.css';
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../../shared/routes';
import { useDispatch } from '../../shared/hooks';
import { modalOpen } from '../../services/actions/modal';
import { ModalType } from '../../shared/types';

export const WelcomePage = () => {
    const dispatch = useDispatch();
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
                    to={{ pathname: `${location.pathname}${REGISTER_ROUTE}` }}
                    state={{ background: location }}
                    onClick={() => dispatch(modalOpen(ModalType.REGISTER))}
                >
                    <Button
                        type="primary"
                        extraClass="mb-14"
                        actionType="button"
                    >Зарегистрироваться</Button>
                </Link>
                <Link
                    to={{ pathname: `${location.pathname}${LOGIN_ROUTE}` }}
                    state={{ background: location }}
                    onClick={() => dispatch(modalOpen(ModalType.LOGIN))}
                >
                    <Button
                        type="secondary"
                        actionType="button"
                    >Залогиниться</Button>
                </Link>
            </section>
        </div>
    )
}