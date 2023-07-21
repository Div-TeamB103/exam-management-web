import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import LeftBar from './MainComponents/LeftBar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StyledEngineProvider injectFirst>
        <LeftBar />
    </StyledEngineProvider>


);


reportWebVitals();
