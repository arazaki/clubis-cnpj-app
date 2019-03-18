import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import salesReducer from '../reducers/sales';
import filtersReducer from '../reducers/filters';
import dashboardDataReducer from '../reducers/dashboardData';
import authReducer from '../reducers/auth';
import companyReducer from '../reducers/company';
import customersReducer from '../reducers/customers';
import vouchersReducer from '../reducers/vouchers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            sales: salesReducer,
            filters: filtersReducer,
            dashboardData: dashboardDataReducer,
            auth: authReducer,
            company: companyReducer,
            customers: customersReducer, 
            vouchers: vouchersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        );
    return store;
};