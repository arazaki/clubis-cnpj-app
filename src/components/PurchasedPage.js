import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import BalanceSummary from './BalanceSummary';

export const PurchasedPage = ({ company }) => (
    <div className="bg-orange">
        <BalanceSummary {...company} />
        <ExpenseList {...company} />
    </div>
);

const mapStateToProps = (state, props) => ({
    company: state.companies.find((company) => company.id === props.match.params.id)

});

export default connect(mapStateToProps)(PurchasedPage);


