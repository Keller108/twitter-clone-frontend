import { Button } from '../Button';
import './Form.css';

type Props = {
    formTitle: string;
    btnText: string;
    onSubmit: () => void;
    children: JSX.Element;
};

export const Form = ({ formTitle, btnText, onSubmit, children }: Props) => {
    return (
        <form onSubmit={onSubmit} className="form">
            <h2 className="form__title">{formTitle}</h2>
            {children}
            <Button
                type="primary"
                actionType="submit"
            >
                {btnText}
            </Button>
        </form>
    )
}