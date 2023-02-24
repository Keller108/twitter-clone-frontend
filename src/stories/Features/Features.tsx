import './Features.css';
import { featuresIconsMap } from './icons/featuresIconsMap';
import { IFeatureItem } from './types';

interface IFeaturesMap {
    [key: string]: IFeatureItem
}

export const Features = () => {
    const featuresMap: IFeaturesMap = {
        home: {
            title: 'Home',
            value: 'home',
            link: '/home',
        },
        profile: {
            title: 'Profile',
            value: 'profile',
            link: '/profile',
        }
    };

    const getIcon: (key: string) => JSX.Element = (key: string) => featuresIconsMap[key];
    const options = Object.entries(featuresMap).map(([key, value]) => ({ key, value }));

    return (
        <ul className="features">
            {options.map(({ key, value }) => <li key={key} className="features__item">
                {getIcon(key)}
                <p className="features__text">{value.title}</p>
            </li>)}
        </ul>
    )
}