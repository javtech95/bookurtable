import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reserve from './reserve';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<reserve />, document.getElementById('root'));
registerServiceWorker();
