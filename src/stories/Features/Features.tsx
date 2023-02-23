import './Features.css';
import { featuresIconsMap } from './icons/featuresIconsMap';

export const Features = () => {
    const featuresMap = {
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

    //@ts-ignore
    const getIcon = (key: string) => featuresIconsMap[key];

    const options = Object.entries(featuresMap).map(([key, value]) => ({ key, value }));

    return (
        <ul className="features">
            {options.map(({ key, value }) => <li className="features__item">
                {getIcon(key)}
                <p className="features__text">{value.title}</p>
            </li>)}
        </ul>
    )
}