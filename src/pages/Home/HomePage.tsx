import { Features } from '../../stories/Features';
import LOGO_PATH from './icons/logo.svg';
import './HomePage.css';
import { PageHeader } from '../../shared/ui/PageHeader';
import { TweetEditor } from '../../features/TweetEditor';
import { PostList } from '../../features/PostList';

export const HomePage = () => {
    return (
        <div className="home-page">
            <aside className="home-page__features">
                <img className="home-page__logo" src={LOGO_PATH} alt="logo" />
                <Features />
            </aside>
            <main className="home-page__main">
                <PageHeader title="Home" />
                <TweetEditor />
                <PostList />
            </main>
            <aside className="news">

            </aside>
        </div>
    )
}