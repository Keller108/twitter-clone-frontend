import { useState } from 'react';
import { useDispatch, useSelector } from '../../shared/hooks';
import MEDIA_PATH from './assets/icon_image.svg';
import { ITweetActionItems } from './types';
import { TweetActions } from './ui/TweetActions';
import { postMessage } from '../../services/actions/post';
import { v4 as uuidv4 } from 'uuid';
import './TweetEditor.css';
import { FormInput } from '../../shared/ui/FormInput';
import { TweetModal } from './ui/TweetModal';

export const TweetEditor = () => {
    const [message, setMessage] = useState("");
    const [tweetModalActive, setTweetModalActive] = useState(false);
    const [mediaLink, setMediaLink] = useState("");

    const { userName, avatar } = useSelector(store => store.userStore.user);

    const dispatch = useDispatch();

    const tweeterActionsMap: ITweetActionItems = {
        media: {
            action: () => {
                setTweetModalActive(true);
                console.log('click');

            },
            icon: MEDIA_PATH
        }
    };

    const postATweet = () => {
        const post = {
            id: uuidv4(),
            userName: userName,
            avatarPath: avatar,
            createdBy: '@user',
            createdAt: 'now',
            message: message,
            imgPath: ''
        };
        dispatch(postMessage(post));
        setMessage('');
    };

    const modalComponent = <FormInput
        label="Ссылка на картинку"
        type='text'
        name='media'
        onChange={(evt) => setMediaLink(evt.target.value)}
    />;

    return (
        <div className="tweet-editor">
            <img
                className="tweet-editor__avatar"
                src={avatar}
                alt="account img"
            />
            <div className="tweet-editor__content">
                <textarea
                    className="tweet-editor__textarea"
                    rows={2}
                    placeholder="What's happening?"
                    onChange={(evt) => setMessage(evt.target.value)}
                    value={message}
                />
                <TweetActions
                    options={tweeterActionsMap}
                    onSubmit={postATweet}
                />
            </div>
            {tweetModalActive && <TweetModal
                closeModal={() => setTweetModalActive(false)}
                >
                    {modalComponent}
                </TweetModal>
            }
        </div>
    )
};