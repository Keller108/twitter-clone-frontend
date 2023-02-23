import { Features } from '../../stories/Features';
import './HomePage.css';

export const HomePage = () => {
    return (
        <div className="home-page">
            <aside className="home-page__features">
                <Features />
            </aside>
            <main className="twittes">

            </main>
            <aside className="news">

            </aside>
        </div>
    )
}