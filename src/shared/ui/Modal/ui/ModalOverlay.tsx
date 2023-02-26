import './ModalOverlay.css';

type Props = {
    closeModal: () => void;
};

export function ModalOverlay({ closeModal }: Props) {
    return (
        <div
            onClick={closeModal}
            className="modal-overlay"
        />
    )
}