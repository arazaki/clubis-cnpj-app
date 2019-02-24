import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddUserPage from '../components/AddUserPage';

export const PrivateRoute = ({
    isAuthenticated,
    userExist,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => {
            if (isAuthenticated && !userExist ) { 
                return (
                    <AddUserPage {...props} />
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
    userExist: !!state.user
});

export default connect(mapStateToProps)(PrivateRoute);