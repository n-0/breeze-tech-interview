import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './redux/comps/App';
import { reduce } from './redux/reducer';

const store = createStore(reduce, { loading: false, error: false, data: null }, applyMiddleware(thunk));
const tree = (
        <Provider store={store}>
                <App />
        </Provider>
);

ReactDOM.render(tree, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();