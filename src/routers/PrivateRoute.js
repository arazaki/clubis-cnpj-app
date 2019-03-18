import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddCompanyPage from '../components/AddCompanyPage';

export const PrivateRoute = ({
    isAuthenticated,
    companyExist,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => {
            if (isAuthenticated && !companyExist ) { 
                return (
                    <AddCompanyPage {...props} />
                )
            } else if (isAuthenticated) {
                return (
                    <div>
                   <Header />
                    <Component {...props} />
                 </div>
                )
            } else {
                return (
                    <Redirect to='/' />
                )
            }
        }} />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
    companyExist: !!state.company
});

export default connect(mapStateToProps)(PrivateRoute);