import TWITTER_LOGO_PATH from '../../shared/icons/twitter/twitter-logo.svg';
import { Button } from '../../shared/ui/Button';
import './WelcomePage.css';

export const WelcomePage = () => {
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
                <Button
                    type="primary"
                    action={() => 1}
                    extraClass="mb-14"
                >Зарегистрироваться</Button>
                <Button
                    type="secondary"
                    action={() => 1}
                >Зарегистрироваться</Button>
            </section>
        </div>
    )
}