import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Life from './pages/demo/Life'
import Router from './router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
