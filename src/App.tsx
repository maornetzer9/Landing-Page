import React from 'react';
import LandingPage from './components/Landing-Page/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FunctionComponent = () => {
    return (

        <BrowserRouter>

            <Routes>

                <Route path='/' element={<LandingPage />} />

            </Routes>

        </BrowserRouter>

    );
}

export default App;
