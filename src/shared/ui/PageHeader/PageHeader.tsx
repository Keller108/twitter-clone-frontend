import './PageHeader.css';
import ICON_PATH from './assets/icon_stars.svg';

type Props = {
    title: string;
};

export const PageHeader = ({ title }: Props) => {
    return (
        <div className="page-header">
            <h1 className="page-header__title">Home</h1>
            <img className="page-header__icon" src={ICON_PATH} alt={`${title} page`} />
        </div>
    )
};