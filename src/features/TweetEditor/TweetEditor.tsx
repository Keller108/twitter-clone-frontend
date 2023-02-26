import './TweetEditor.css';
import PERSON_PATH from './assets/profile_img.png';
import MEDIA_PATH from './assets/icon_image.svg';
import { ITweetActionItems } from './types';
import { TweetActions } from './ui/TweetActions';

export const TweetEditor = () => {
    const tweeterActionsMap: ITweetActionItems = {
        media: {
            action: () => 1,
            icon: MEDIA_PATH
        }
    };

    return (
        <div className="tweet-editor">
            <img className="tweet-editor__avatar"
                src={PERSON_PATH}
                alt="account img"
            />
            <div className="tweet-editor__content">
                <textarea
                    className="tweet-editor__textarea"
                    rows={2}
                    placeholder="What's happening?"
                />
                <TweetActions options={tweeterActionsMap} />
            </div>
        </div>
    )
};