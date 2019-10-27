import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types/index';


import reducers from './reducers';
import routes from './routes';
import history from './history';
import Header from './components/Header';
import Footer from './components/Footer';

import '@fortawesome/fontawesome-free/css/all.css';
import './assets/fonts/opensans.ttf';
import './components/bundle.scss';
import './i18n';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = JSON.parse(localStorage.getItem('user'));
const Loader = () => <div>loading...</div>;

if (user && user.token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}>
    	<Suspense fallback={<Loader />}>
        	<Header />
     		{routes}
     		<Footer />
     	</Suspense>
    </Router>
  </Provider>
  , document.getElementById('root'));
