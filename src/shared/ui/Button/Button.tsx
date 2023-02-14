import { ButtonStyle } from './types';
import './Button.css';

type Props = {
    type: ButtonStyle;
    action: () => void;
    children: string;
    extraClass?: string;
};

export const Button = ({ type, action, children, extraClass }: Props) => {
    return (
        <button className={`button button_${type} ${extraClass}`}>
            {children}
        </button>
    )
}