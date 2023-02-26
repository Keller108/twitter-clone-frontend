import { ITweetActionItems } from '../../types';
import './TweetActions.css';

type Props = {
    options: ITweetActionItems
};

export const TweetActions = ({ options }: Props) => {
    const tweeterActions = Object.entries(options)
    .map(([key, value]) => ({ key, value}));

    return (
        <div className="tweet-actions">
            <ul className="tweet-actions__items">
                {tweeterActions.map(({ value }) => <li
                    className="tweet-actions__action">
                        <img src={value.icon} alt="tweeterAction" />
                    </li>)
                }
            </ul>
            <button
                className="tweet-actions__action-btn"
                type="button"
                onClick={() => 1}
            >
                Tweet
            </button>
        </div>
    )
}