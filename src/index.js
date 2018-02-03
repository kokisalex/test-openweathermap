import React from 'react';
import ReactDOM from 'react-dom';
import Reducer from './Reducer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Reducer/>, document.getElementById('root'));
registerServiceWorker();
