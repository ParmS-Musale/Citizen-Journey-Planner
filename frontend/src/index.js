import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Adjust the import path if needed
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <App />  {/* No additional Router wrapping */}
    </React.StrictMode>,
    document.getElementById('root')
);
