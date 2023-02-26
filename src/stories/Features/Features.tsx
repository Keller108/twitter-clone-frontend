import './Features.css';
import { featuresIconsMap } from './icons/featuresIconsMap';
import { featuresMap } from './lib/featuresMap';

export const Features = () => {
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