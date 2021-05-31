import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument } from 'react-dom/test-utils';
import App from './components/App'


ReactDOM.render(<App/>,document.querySelector('#root'));
