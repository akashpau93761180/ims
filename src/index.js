import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from '@mui/material/Button';

function Letsseereactbutton(){
  return <Button variant="contained" color="primary">
  MUI Button
</Button>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Letsseereactbutton />
  </React.StrictMode>
);

reportWebVitals();
