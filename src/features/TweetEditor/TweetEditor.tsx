import './TweetEditor.css';
import PERSON_PATH from './assets/profile_img.png';
import MEDIA_PATH from './assets/icon_image.svg';
import { Button } from '../../shared/ui/Button';

interface ITweet {
    action: () => void;
    icon: string;
}

interface ITweeterActionItems {
    [key: string]: ITweet
}

export const TweetEditor = () => {
    const tweeterActionsMap: ITweeterActionItems = {
        media: {
            action: () => 1,
            icon: MEDIA_PATH
        }
    };

    const tweeterActions = Object.entries(tweeterActionsMap)
        .map(([key, value]) => ({ key, value}));

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
                <div className="tweet-editor__features">
                    <ul className="tweet-editor__actions">
                        {tweeterActions.map(({ value }) => <li
                            className="tweet-editor__action">
                                <img src={value.icon} alt="tweeterAction" />
                            </li>)
                        }
                    </ul>
                    <button
                        className="tweet-editor__action-btn"
                        type="button"
                        onClick={() => 1}
                    >
                        Tweet
                    </button>
                </div>
            </div>
        </div>
    )
};