import { ButtonAction, ButtonStyle } from './types';
import './Button.css';

type Props = {
    type: ButtonStyle;
    action?: () => void;
    children: string;
    extraClass?: string;
    actionType: ButtonAction;
};

export const Button = ({ type, action, children, extraClass, actionType }: Props) => {
    return (
        <button
            className={`button button_${type} ${extraClass}`}
            onClick={action}
            type={actionType}
        >
            {children}
        </button>
    )
}