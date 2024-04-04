import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthUser from './contexts/AuthUser.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthUser>
                <App />
            </AuthUser>
        </BrowserRouter>
    </React.StrictMode>,
);