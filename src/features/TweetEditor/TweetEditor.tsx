import MEDIA_PATH from './assets/icon_image.svg';
import { ITweetActionItems } from './types';
import { TweetActions } from './ui/TweetActions';
import { useState } from 'react';
import { useDispatch, useSelector } from '../../shared/hooks';
import { postMessage } from '../../services/actions/post';
import { v4 as uuidv4 } from 'uuid';
import './TweetEditor.css';
import { FormInput } from '../../shared/ui/FormInput';

export const TweetEditor = () => {
    const [message, setMessage] = useState("");
    const [imgModalActive, setImgModalActive] = useState(false);
    const [, setMediaLink] = useState("");

    const { isModalActive } = useSelector(store => store.modalStore);
    const { userName, avatar } = useSelector(store => store.userStore.user);

    const dispatch = useDispatch();

    const tweeterActionsMap: ITweetActionItems = {
        media: {
            action: () => 1,
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
                <TweetActions options={tweeterActionsMap} onSubmit={postATweet} />
            </div>
        </div>
    )
};