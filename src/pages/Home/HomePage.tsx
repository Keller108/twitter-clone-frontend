import { Features } from '../../stories/Features';
import LOGO_PATH from './icons/logo.svg';
import './HomePage.css';

export const HomePage = () => {
    return (
        <div className="home-page">
            <aside className="home-page__features">
                <img className="home-page__logo" src={LOGO_PATH} alt="logo" />
                <Features />
            </aside>
            <main className="twittes">

            </main>
            <aside className="news">

            </aside>
        </div>
    )
}