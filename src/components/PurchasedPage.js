import React from 'react';
import { connect } from 'react-redux';
import SaleList from './SaleList';
import BalanceSummary from './BalanceSummary';

export const PurchasedPage = ({ company }) => (
    <div className="bg-orange">
        <BalanceSummary {...company} />
        <SaleList {...company} />
    </div>
);

const mapStateToProps = (state, props) => ({
    company: state.companies.find((company) => company.id === props.match.params.id)

});

export default connect(mapStateToProps)(PurchasedPage);


