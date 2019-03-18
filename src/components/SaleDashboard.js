import React from 'react';
import { connect } from 'react-redux';
import SaleList from './SaleList';
import SaleListFilters from './SaleListFilters';
import { startSetSales } from '../actions/sales';

const SaleDashboardPage = ({ startSetSales }) => {
    startSetSales();
    return (
        <div>
            <SaleListFilters />
            <SaleList />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startSetSales: () => dispatch(startSetSales())
});

export default connect(undefined, mapDispatchToProps)(SaleDashboardPage);