import React from 'react';
import { connect } from 'react-redux';
import CustomerList from './CustomerList';
import CustomerListFilters from './CustomerListFilters';
import { startSetCustomers } from '../actions/customers';

const CustomerDashboardPage = ({ startSetCustomers }) => {
    startSetCustomers();
    return (
        <div>
            <CustomerListFilters />
            <CustomerList />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startSetCustomers: () => dispatch(startSetCustomers())
});

export default connect(undefined, mapDispatchToProps)(CustomerDashboardPage);