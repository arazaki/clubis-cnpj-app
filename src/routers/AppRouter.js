import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import FutureCashback from '../components/FutureCashback';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddUserPage from '../components/AddUserPage';
import EditUserPage from '../components/EditUserPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/futureCashback" component={FutureCashback} />
            <PrivateRoute path="/createUser" component={AddUserPage} />
            <PrivateRoute path="/editUser/:id" component={EditUserPage} />
            <Route component={NotFound} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;