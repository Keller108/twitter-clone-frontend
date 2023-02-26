import './TweetEditor.css';
import PERSON_PATH from './assets/profile_img.png';

export const TweetEditor = () => {
    return (
        <div className="tweet-editor">
            <img className="tweet-editor__avatar"
                src={PERSON_PATH}
                alt="account img"
            />
            <div className="tweet-editor__content">
                <textarea
                    className="tweet-editor__textarea"
                    rows={4}
                    placeholder="What's happening?"
                />
                <ul className="tweet-editor__actions">
                    <li className="tweet-editor__action">

                    </li>
                </ul>
            </div>
        </div>
    )
};