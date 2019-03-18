import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddCompanyPage from '../components/AddCompanyPage';
import AddVoucherPage from '../components/AddVoucherPage';
import EditCompanyPage from '../components/EditCompanyPage';
import SaleDashboardPage from '../components/SaleDashboard';
import VoucherDashboardPage from '../components/VoucherDashboardPage';
import CustomerDashboardPage from '../components/CustomerDashboardPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/sales" component={SaleDashboardPage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/customers" component={CustomerDashboardPage} />
            <PrivateRoute path="/vouchers" component={VoucherDashboardPage} />
            <PrivateRoute path="/createCompany" component={AddCompanyPage} />
            <PrivateRoute path="/editCompany/:id" component={EditCompanyPage} />
            <PrivateRoute path="/createVoucher" component={AddVoucherPage} />
            <Route component={NotFound} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;