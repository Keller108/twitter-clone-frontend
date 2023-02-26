import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './ui/ModalOverlay';
import './Modal.css';

type Props = {
    onClose: () => void;
    children: JSX.Element | null;
};

export const Modal = ({ onClose, children }: Props) => {
    const modalClose = () => onClose();

    const closeModalByEsc = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') return modalClose();
    };

    useEffect(() => {
        document.addEventListener('keydown', closeModalByEsc);
        return () => {
            document.removeEventListener('keydown', closeModalByEsc)
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return createPortal(
        <>
            <div className="modal">
                <span onClick={modalClose} className="modal__closeBtn" />
                {children}
            </div>
            <ModalOverlay closeModal={modalClose} />
        </>,
        document.getElementById("modals") as HTMLDivElement
    )
}