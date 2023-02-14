import { Fragment, useEffect, useState } from 'react';
import { Preloader } from '../shared/ui/Preloader';
import './App.css';

export function App() {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 400);
    }, [])
    return (<Fragment>
            {isLoading
                ? <Preloader />
                : <div>Hello World!</div>
            }
        </Fragment>
    )
}