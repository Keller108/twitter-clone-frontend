import TWITTER_LOGO_PATH from '../../shared/icons/twitter/twitter-logo.svg';
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

            </section>
        </div>
    )
}