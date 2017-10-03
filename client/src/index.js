import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Home from "./pages/Home";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
