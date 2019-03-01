import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import PurchasedPage from '../components/PurchasedPage';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddUserPage from '../components/AddUserPage';
import EditUserPage from '../components/EditUserPage';
import CompanyList from '../components/CompanyList';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/companyList" component={CompanyList} />
            <PrivateRoute path="/dashboard/:id" component={DashboardPage} />
            <PrivateRoute path="/purchased/:id" component={PurchasedPage} />
            <PrivateRoute path="/createUser" component={AddUserPage} />
            <PrivateRoute path="/editUser/:id" component={EditUserPage} />
            <Route component={NotFound} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;