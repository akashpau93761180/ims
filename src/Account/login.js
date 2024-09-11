import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from '@mui/material/Button';


function Loginui(){
    return <h1>Login Page</h1>
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Loginui />
  </React.StrictMode>
);