import './Post.css';
import AVATAR_PATH from './assets/profile_img.png';
import PIC_PATH from './assets/pic-twit-1.jpg';

export const Post = () => {
    return (
        <li className="post">
            <img className="post__avatar" src={AVATAR_PATH} alt="avatar" />
            <div className="post__content">
                <div className="post__header">
                    <div className="post__details">
                        <h2 className="post__user-name">Devon Lane</h2>
                        <p className="post__account-name">@devondude</p>
                        <p className="post__created-date">~1 hour ago</p>
                    </div>
                    <p className="post__message">Tom is in a big hurry.</p>
                </div>
                <img className="post__picture" src={PIC_PATH} alt="post" />
            </div>
        </li>
    )
}