import { ITweetActionItems } from '../../types';
import './TweetActions.css';

type Props = {
    options: ITweetActionItems;
    onSubmit: () => void;
};

export const TweetActions = ({ options, onSubmit }: Props) => {
    const tweeterActions = Object.entries(options)
        .map(([key, value]) => ({ key, value}));

    return (
        <div className="tweet-actions">
            <ul className="tweet-actions__items">
                {tweeterActions.map(({ value }, i) => <li
                        className="tweet-actions__action"
                        key={i + 1}
                        onClick={value.action}
                    >
                        <img src={value.icon} alt="tweeterAction" />
                        {value.img && <span className="tweet-actions__label">Добавлено</span>}
                    </li>)
                }
            </ul>
            <button
                className="tweet-actions__action-btn"
                type="button"
                onClick={onSubmit}
            >
                Tweet
            </button>
        </div>
    )
};