import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import AppContext from './Components/Context';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AppContext>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="108882381745-8p523dg2jsuu0ef4c4h83nuuksrhee27.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
</AppContext>
);


reportWebVitals();
