import './Features.css';
import HOME_ICON from './icons/icon_toolbar_home.svg';

interface IFeatureItem {
    title: string;
    link: string;
    iconPath: string;
}

export const Features = () => {
    const featuresMap = {
        home: {
            title: 'Home',
            link: '/home',
            iconPath: HOME_ICON
        }
    };

    const options = Object.entries(featuresMap).map(([key, value]) => ({ key, value }));

    return (
        <ul className="features">
            {options.map(({ key, value }) => <li className="features__item">
                <img src={value.iconPath} alt={key} />
                <p className="features__text">{value.title}</p>
            </li>)}
        </ul>
    )
}