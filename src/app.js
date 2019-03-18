import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetDashboardData } from './actions/dashboardData';
import { startSetCompany } from './actions/company';
import { startSetCustomers } from './actions/customers';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import numeral from './locale/pt-br';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

// switch between locales
moment.locale('pt-br');
numeral();

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    };
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetCustomers());
        store.dispatch(startSetCompany()).then(() => {
            if (store.getState().company) {
                store.dispatch(startSetDashboardData()).then(() => {
                    renderApp();
                    if (history.location.pathname === '/') {
                        history.push('/dashboard');
                    }
                })
            } else {
                renderApp();
                if (history.location.pathname === '/') {
                    history.push('/createCompany');
                };;
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});