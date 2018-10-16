import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers';
import ApolloProvider from "react-apollo/ApolloProvider";
import client from './apolloClient';

WebFont.load({
    google: {
        families: ['Oswald:200,400:latin', 'Open Sans:200,300:latin']
    }
});

const store = createStore(rootReducer);

ReactDOM.render(

    <ApolloProvider
    client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
