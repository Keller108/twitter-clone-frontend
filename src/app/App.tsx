import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "../pages/Welcome";
import { NotFound } from "../pages/NotFound";
import { WELCOME_ROUTE } from "../shared/routes";
import './App.css';

export function App() {
    return (
        <div className="app">
            <Routes>
                <Route path={WELCOME_ROUTE} element={<WelcomePage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}