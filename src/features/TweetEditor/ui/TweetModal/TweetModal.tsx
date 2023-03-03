import { useEffect } from 'react';
import './TweetModal.css';

type Props = {
    closeModal: () => void;
    children: JSX.Element;
};

export const TweetModal = ({ closeModal, children }: Props) => {
    const closeModalByEsc = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
            closeModal();
            console.log('esc');
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', closeModalByEsc)
        return () => document.removeEventListener('keydown', closeModalByEsc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="tweet-modal">
            <div className="tweet-modal__popup">
                {children}
            </div>
        </div>
    )
};