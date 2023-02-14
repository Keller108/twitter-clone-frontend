import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { compose } from 'redux';
import { store } from './services/store';
import './index.css';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const root = createRoot(
    document.getElementById('root') as HTMLDivElement
);

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);

reportWebVitals();